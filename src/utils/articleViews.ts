import { useState, useEffect } from 'react';
import {
  subscribeToRealtimeArticleViews,
  recordGlobalArticleView,
} from '../lib/firebase';

/**
 * Article Views & Publication Date Manager
 *
 * Automatically tracks and calculates:
 * 1. Formatted publication date based on article's actual publishedAt ISO timestamp.
 * 2. Cumulative view count starting from publication date + real-time Firebase visitor increments.
 */

const STORAGE_KEY_PREFIX = 'navero_article_views_';
const VIEWED_SESSION_KEY = 'navero_viewed_session_';

/**
 * Calculates a realistic base baseline of reads based on publication age
 */
export function getBaselineViews(publishedAt: string): number {
  try {
    const pubDate = new Date(publishedAt).getTime();
    const now = Date.now();
    const daysSince = Math.max(0, Math.floor((now - pubDate) / (1000 * 60 * 60 * 24)));
    // Realistic readership curve starting from publication date
    const base = 128 + daysSince * 15;
    return base;
  } catch {
    return 130;
  }
}

/**
 * Retrieves the current total view count for an article (fallback cache)
 */
export function getArticleViews(articleId: string, publishedAt: string): number {
  if (typeof window === 'undefined') {
    return getBaselineViews(publishedAt);
  }

  const baseline = getBaselineViews(publishedAt);
  const storedBonus = localStorage.getItem(`${STORAGE_KEY_PREFIX}${articleId}`);
  const bonusViews = storedBonus ? parseInt(storedBonus, 10) || 0 : 0;

  return baseline + bonusViews;
}

/**
 * Increments an article's view count when read/opened.
 * Uses session deduplication to prevent accidental rapid reloads from artificially inflating counts,
 * and asynchronously syncs to Firebase Firestore for global synchronization.
 */
export function incrementArticleView(
  articleId: string,
  publishedAt: string
): { views: number; isNewView: boolean } {
  if (typeof window === 'undefined') {
    return { views: getBaselineViews(publishedAt), isNewView: false };
  }

  const sessionKey = `${VIEWED_SESSION_KEY}${articleId}`;
  const alreadyViewedInSession = sessionStorage.getItem(sessionKey);

  const baseline = getBaselineViews(publishedAt);
  const storedBonus = localStorage.getItem(`${STORAGE_KEY_PREFIX}${articleId}`);
  let bonusViews = storedBonus ? parseInt(storedBonus, 10) || 0 : 0;

  let isNewView = false;
  if (!alreadyViewedInSession) {
    bonusViews += 1;
    localStorage.setItem(`${STORAGE_KEY_PREFIX}${articleId}`, bonusViews.toString());
    sessionStorage.setItem(sessionKey, '1');
    isNewView = true;

    // Asynchronously record globally into Firebase Firestore
    recordGlobalArticleView(articleId, baseline).catch((err) => {
      console.warn('Background Firebase global view record notice:', err);
    });
  }

  return {
    views: baseline + bonusViews,
    isNewView,
  };
}

/**
 * React Hook for Real-time Article View Subscription
 * Connects directly to Firestore for multi-user live synchronization across the globe.
 */
export function useRealtimeArticleViews(
  articleId: string | undefined,
  publishedAt: string | undefined
): { views: number; isLive: boolean } {
  const initialBase = publishedAt ? getBaselineViews(publishedAt) : 130;
  const [views, setViews] = useState<number>(() => {
    return articleId && publishedAt ? getArticleViews(articleId, publishedAt) : initialBase;
  });
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    if (!articleId || !publishedAt) return;

    const base = getBaselineViews(publishedAt);
    // Initial local read
    setViews((prev) => Math.max(prev, getArticleViews(articleId, publishedAt)));

    // Subscribe to Firebase real-time updates
    const unsubscribe = subscribeToRealtimeArticleViews(articleId, base, (updatedViews) => {
      setViews(updatedViews);
      setIsLive(true);
      // Cache latest known count in local storage
      if (typeof window !== 'undefined') {
        const bonus = Math.max(0, updatedViews - base);
        localStorage.setItem(`${STORAGE_KEY_PREFIX}${articleId}`, bonus.toString());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [articleId, publishedAt]);

  return { views, isLive };
}

/**
 * Formats view count according to current language
 */
export function formatArticleViews(count: number, lang: 'ko' | 'en'): string {
  const formattedNumber = count.toLocaleString();
  if (lang === 'ko') {
    return `조회 ${formattedNumber}회`;
  }
  return `${formattedNumber} views`;
}

/**
 * Formats published date accurately based on the article's actual publishedAt ISO date string
 */
export function formatPublishedDate(publishedAt: string, lang: 'ko' | 'en'): string {
  try {
    const date = new Date(publishedAt);
    if (isNaN(date.getTime())) {
      return lang === 'ko' ? '2026년 9월 7일 발행' : 'Published Sep 7, 2026';
    }

    if (lang === 'ko') {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}년 ${month}월 ${day}일 발행`;
    }

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    return `Published ${date.toLocaleDateString('en-US', options)}`;
  } catch {
    return lang === 'ko' ? '2026년 9월 7일 발행' : 'Published Sep 7, 2026';
  }
}

