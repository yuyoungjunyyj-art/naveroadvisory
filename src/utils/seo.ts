/**
 * SEO & Share Utilities for NAVERO Strategic Advisory
 */

export function getInsightShareUrl(slug: string): string {
  if (typeof window !== 'undefined') {
    const origin = window.location.origin;
    if (origin.includes('naveroadvisory.com')) {
      return `https://naveroadvisory.com/?article=${slug}#insights`;
    }
  }
  return `https://naveroadvisory.com/?article=${slug}#insights`;
}

export async function copyTextToClipboard(text: string): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fallback below
    }
  }

  if (typeof document !== 'undefined') {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.left = '-999999px';
      textarea.style.top = '-999999px';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);
      return successful;
    } catch (err) {
      console.error('Failed to copy text', err);
      return false;
    }
  }

  return false;
}
