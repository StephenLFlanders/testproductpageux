import { AnalyticsConfig } from 'pliny/analytics';
import { CommentsConfig } from 'pliny/comments';
import { NewsletterConfig } from 'pliny/newsletter';
import { SearchConfig } from 'pliny/search';

export interface SiteMetadata {
  title: string;
  description: string;
  domain: string;
  logoTitle: string;
  socialBanner: string;
  supportEmail: string;

  twitter: string;
  github: string;
  linkedin: string;
  facebook: string;
  youtube: string;
  mastodon: string;
  email: string;

  language: string;
  theme: 'system' | 'dark' | 'light';
  locale: string;
}

export interface SiteConfig extends SiteMetadata {
  allArticlesPath: string;
  disableAnalytics: boolean;
  analytics?: AnalyticsConfig | undefined;
  comments?: CommentsConfig | undefined;
  newsletter?: NewsletterConfig | undefined;
  search?: SearchConfig | undefined;
}
