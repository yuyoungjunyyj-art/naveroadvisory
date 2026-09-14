import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  onSnapshot,
  setDoc,
  getDoc,
  getDocFromServer,
  increment,
  serverTimestamp,
  Firestore,
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App instance
export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore with specific database ID from config
export const db: Firestore = getFirestore(
  app,
  firebaseConfig.firestoreDatabaseId || '(default)'
);

// Connection verification as recommended
let isTested = false;
export async function verifyFirestoreConnection(): Promise<boolean> {
  if (isTested) return true;
  try {
    const testDocRef = doc(db, 'article_views', '_ping');
    await getDocFromServer(testDocRef);
    isTested = true;
    return true;
  } catch (error) {
    // If offline or first time, log cleanly
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn('Firestore is connecting or working offline');
    }
    return false;
  }
}

// Global listener registry for real-time article views
export interface ArticleViewRecord {
  articleId: string;
  views: number;
  lastViewedAt?: any;
}

/**
 * Subscribe to real-time view updates for a specific article.
 * When any reader across the globe visits, all open tabs receive the updated count instantly!
 */
export function subscribeToRealtimeArticleViews(
  articleId: string,
  baseline: number,
  onUpdate: (views: number) => void
): () => void {
  try {
    const docRef = doc(db, 'article_views', articleId);

    const unsubscribe = onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          const serverViews = typeof data.views === 'number' ? data.views : 0;
          // Combine initial baseline + total global recorded reads
          const totalViews = Math.max(baseline, serverViews);
          onUpdate(totalViews);
        } else {
          // Document does not exist yet; initialize it in background
          onUpdate(baseline);
          setDoc(
            docRef,
            {
              articleId,
              views: baseline,
              createdAt: serverTimestamp(),
              lastViewedAt: serverTimestamp(),
            },
            { merge: true }
          ).catch(() => {
            // Non-blocking
          });
        }
      },
      (error) => {
        console.warn(`Firestore onSnapshot error for ${articleId}:`, error);
        onUpdate(baseline);
      }
    );

    return unsubscribe;
  } catch (err) {
    console.warn('Failed to subscribe to article views:', err);
    onUpdate(baseline);
    return () => {};
  }
}

/**
 * Increment global view count in Firestore atomically.
 * Ensures concurrent reads across global users don't overwrite each other.
 */
export async function recordGlobalArticleView(
  articleId: string,
  baseline: number
): Promise<number | null> {
  try {
    const docRef = doc(db, 'article_views', articleId);
    
    // Check if doc exists to properly set baseline on first read
    const snap = await getDoc(docRef).catch(() => null);
    
    if (!snap || !snap.exists()) {
      const initialCount = baseline + 1;
      await setDoc(
        docRef,
        {
          articleId,
          views: initialCount,
          createdAt: serverTimestamp(),
          lastViewedAt: serverTimestamp(),
        },
        { merge: true }
      );
      return initialCount;
    } else {
      const data = snap.data();
      const currentViews = typeof data.views === 'number' ? data.views : baseline;
      const nextViews = Math.max(baseline, currentViews) + 1;

      await setDoc(
        docRef,
        {
          articleId,
          views: increment(1),
          lastViewedAt: serverTimestamp(),
        },
        { merge: true }
      );
      return nextViews;
    }
  } catch (error) {
    console.warn(`Failed to record global view for ${articleId}:`, error);
    return null;
  }
}
