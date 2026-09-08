/**
 * Google Analytics 4 (GA4) Tracker Module for NAVERO Strategic Advisory
 *
 * Provides customer journey and behavioral analytics tracking:
 * - Page views & anchor navigation
 * - Article impressions & reader engagement (depth & scroll)
 * - Strategic consultation requests & form submissions
 * - Market assessment interactions
 * - Language & theme preferences
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Read GA4 Measurement ID from Vite environment or direct configuration
export const GA_MEASUREMENT_ID =
  (import.meta.env.VITE_GA_MEASUREMENT_ID as string) || 'G-7828NVY9ZS';

let isInitialized = false;

/**
 * Initializes Google Analytics 4
 * Automatically injects the official gtag.js script if not already present.
 */
export function initGA(): void {
  if (isInitialized || typeof window === 'undefined') return;

  const measurementId = GA_MEASUREMENT_ID.trim();

  if (measurementId && measurementId !== 'G-XXXXXXXXXX') {
    window.dataLayer = window.dataLayer || [];
    if (!window.gtag) {
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', measurementId);
    }

    // eslint-disable-next-line no-console
    console.info(`[GA4] Active with measurement ID: ${measurementId}`);
  } else {
    // Development mode helper
    // eslint-disable-next-line no-console
    console.info(
      '[GA4 Dev Tracker] Running in development/preview mode. Set VITE_GA_MEASUREMENT_ID to stream live events to Google Analytics.'
    );
  }

  isInitialized = true;
}

/**
 * Standard GA4 Custom Event Dispatcher
 */
export function trackEvent(
  eventName: string,
  eventParams: Record<string, any> = {}
): void {
  if (typeof window === 'undefined') return;

  const payload = {
    ...eventParams,
    timestamp: new Date().toISOString(),
  };

  if (window.gtag && GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    window.gtag('event', eventName, payload);
  } else {
    // Development logger to verify telemetry without needing live credentials
    // eslint-disable-next-line no-console
    console.debug(`[GA4 Event] ${eventName}:`, payload);
  }
}

/**
 * Track SPA Page / Section View
 */
export function trackPageView(pagePath: string, pageTitle?: string): void {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle || document.title,
    page_location: window.location.href,
  });
}

/**
 * Track Insight Article View (Post Engagement)
 */
export function trackArticleView(params: {
  articleId: string;
  articleTitle: string;
  category?: string;
  publishedAt?: string;
  viewCount?: number;
  lang: string;
}): void {
  trackEvent('view_item', {
    item_id: params.articleId,
    item_name: params.articleTitle,
    item_category: params.category || 'Strategic Insights',
    published_date: params.publishedAt,
    view_count: params.viewCount,
    language: params.lang,
    content_type: 'article',
  });

  trackEvent('article_opened', {
    article_id: params.articleId,
    article_title: params.articleTitle,
    language: params.lang,
  });
}

/**
 * Track Article Reading Scroll Depth (e.g. 25%, 50%, 75%, 100%)
 */
export function trackArticleScroll(articleId: string, depthPercent: number): void {
  trackEvent('article_scroll_depth', {
    article_id: articleId,
    percent_scrolled: depthPercent,
  });
}

/**
 * Track Article Sharing (e.g., URL copy)
 */
export function trackArticleShare(articleId: string, method: string = 'copy_link'): void {
  trackEvent('share', {
    content_type: 'article',
    item_id: articleId,
    method,
  });
}

/**
 * Track Consultation Requests (Key Conversion Funnel)
 */
export function trackConsultationClick(sourceLocation: string): void {
  trackEvent('consultation_intent', {
    source: sourceLocation,
    action: 'click_request_consultation',
  });
}

/**
 * Track Market Assessment Tool Engagement
 */
export function trackAssessmentEvent(
  action: 'started' | 'step_completed' | 'finished',
  details?: Record<string, any>
): void {
  trackEvent(`assessment_${action}`, {
    tool: 'South Korea Market Entry Assessment',
    ...details,
  });
}

/**
 * Track Contact Form Submission
 */
export function trackContactSubmission(params: {
  serviceRequired: string;
  hasTimeline: boolean;
}): void {
  trackEvent('generate_lead', {
    service_type: params.serviceRequired,
    has_timeline: params.hasTimeline,
    conversion_type: 'contact_form',
  });
}

/**
 * Track Language or Theme Switch
 */
export function trackPreferenceChange(
  type: 'language' | 'theme',
  value: string
): void {
  trackEvent('preference_change', {
    preference_type: type,
    value,
  });
}
