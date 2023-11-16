import { NewsletterAPI } from 'pliny/newsletter';
import { siteConfig } from '@/data/config/site.settings';

const handler = NewsletterAPI({
  // @ts-ignore
  provider: siteConfig.newsletter.provider,
});

export { handler as GET, handler as POST };
