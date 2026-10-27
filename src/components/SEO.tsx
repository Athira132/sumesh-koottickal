import { useEffect } from 'react';
import { SITE_DOMAIN, DEFAULT_OG_IMAGE } from '../data/seo';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  ogImage?: string;
  ogType?: 'website' | 'profile' | 'article';
}

function updateOrCreateMeta(attributeName: 'name' | 'property', attributeValue: string, content: string) {
  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function updateOrCreateLink(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath,
  schema,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
}) => {
  useEffect(() => {
    // 1. Page Title
    document.title = title;

    // 2. Canonical URL
    const canonicalUrl = `${SITE_DOMAIN}${canonicalPath === '/' ? '' : canonicalPath}`;
    updateOrCreateLink('canonical', canonicalUrl);

    // 3. Primary Meta Tags
    updateOrCreateMeta('name', 'description', description);
    updateOrCreateMeta('name', 'robots', 'index, follow');

    // 4. Open Graph Metadata
    updateOrCreateMeta('property', 'og:title', title);
    updateOrCreateMeta('property', 'og:description', description);
    updateOrCreateMeta('property', 'og:url', canonicalUrl);
    updateOrCreateMeta('property', 'og:type', ogType);
    updateOrCreateMeta('property', 'og:image', ogImage);
    updateOrCreateMeta('property', 'og:site_name', 'Sumesh Koottickal');
    updateOrCreateMeta('property', 'og:locale', 'en_US');

    // 5. Twitter Card Metadata
    updateOrCreateMeta('name', 'twitter:card', 'summary_large_image');
    updateOrCreateMeta('name', 'twitter:title', title);
    updateOrCreateMeta('name', 'twitter:description', description);
    updateOrCreateMeta('name', 'twitter:image', ogImage);

    // 6. JSON-LD Structured Data
    const scriptId = 'structured-data-jsonld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema, null, 2);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, canonicalPath, schema, ogImage, ogType]);

  return null;
};
