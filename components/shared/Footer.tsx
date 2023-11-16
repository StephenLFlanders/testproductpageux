import Image from 'next/image';
import Link from './Link';
import { siteConfig } from '@/data/config/site.settings';
import {
  MailIcon,
  GithubIcon,
  FacebookIcon,
  YoutubeIcon,
  LinkedinIcon,
} from 'lucide-react';
import { TwitterXIcon } from '@/components/icons/XIcon';

import ActiveLink from '@/components/shared/ActiveLink';
import { FooterSupportButton } from '@/components/shared/FooterSupportButton';
import { Button } from '@/components/shared/ui/button';
import { footerLinks } from '@/data/config/footerLinks';
import { cn } from '@/lib/utils';

export default function Footer() {
  const columnNumber = footerLinks.filter(({ links }) => links.length).length;

  return (
    <footer className="w-full bg-gradient-to-r from-white/5 via-white/60 to-white/5 backdrop-blur-sm dark:from-slate-700/5 dark:via-slate-700/60 dark:to-slate-700/5">
      <div
        className={cn(
          'flex flex-col gap-4 justify-between items-center w-full my-10 p-6',
        )}
      >
        <div className="w-full flex flex-col md:flex-row justify-between gap-6 mt-12 wide-container">
          <div className="w-full flex flex-col gap-4 md:max-w-xs lg:max-w-sm">
            <Link href="/" aria-label={siteConfig.title}>
              <div className="flex items-center gap-3">
                <Image
                  src="/static/images/logo.png"
                  alt={`${siteConfig.businessName} logo`}
                  width={32}
                  height={32}
                  className="group-hover:animate-wiggle"
                />

                {typeof siteConfig.logoTitle === 'string' ? (
                  <div className="hidden text-2xl font-semibold sm:flex h-full">
                    {siteConfig.logoTitle}
                  </div>
                ) : null}
              </div>
            </Link>

            {typeof siteConfig.title === 'string' ? (
              <div className="text-lg font-semibold h-full">
                {siteConfig.title}
              </div>
            ) : null}

            {siteConfig.description ? (
              <p className="text-sm opacity-70">{siteConfig.description}</p>
            ) : null}

            <p className="text-xs">Copyright © {siteConfig.businessName}</p>
          </div>

          <div
            className={cn(
              'grid md:grid-cols-2 gap-12 items-start mt-6 md:mt-0',
              columnNumber === 3 ? 'md:grid-cols-3' : '',
              columnNumber === 4 ? 'lg:grid-cols-4' : '',
            )}
          >
            {footerLinks
              .filter(({ links }) => links.length)
              .map((column, index) => {
                return (
                  <ul
                    key={index}
                    className={cn(
                      'flex flex-col flex-wrap gap-4 justify-center w-full text-xs',
                    )}
                  >
                    {column.columnName ? (
                      <li>
                        <p className="text-slate-900 dark:text-slate-100 font-light text-base">
                          {column.columnName}
                        </p>
                      </li>
                    ) : null}

                    {column.links.map((link, index) => {
                      if (!link.href) {
                        return null;
                      }

                      if (link.href === '#support') {
                        return (
                          <li key={index}>
                            <FooterSupportButton />
                          </li>
                        );
                      }

                      return (
                        <li key={index}>
                          <ActiveLink
                            href={link.href}
                            className={'nav-link'}
                            activeClassName={'nav-link-active'}
                          >
                            <span>{link.title}</span>
                          </ActiveLink>
                        </li>
                      );
                    })}
                  </ul>
                );
              })}
          </div>
        </div>
      </div>

      <div>
        <hr
          className="w-full my-4 border-0 bg-gradient-to-r from-white/5 via-black/10 to-white/5 dark:from-black/5 dark:via-white/30 darK:to-black/5"
          style={{ height: '1px' }}
        />

        <div className="py-8 flex flex-col items-center">
          <div className="mb-3 flex space-x-4">
            {siteConfig.email && (
              <a href={`mailto:${siteConfig.email}`}>
                <Button variant="ghost" size="icon">
                  <MailIcon className="w-6 h-6" />
                </Button>
              </a>
            )}

            {siteConfig.github && (
              <a href={siteConfig.github}>
                <Button variant="ghost" size="icon">
                  <GithubIcon className="w-6 h-6" />
                </Button>
              </a>
            )}

            {siteConfig.facebook && (
              <a href={siteConfig.facebook}>
                <Button variant="ghost" size="icon">
                  <FacebookIcon className="w-6 h-6" />
                </Button>
              </a>
            )}

            {siteConfig.youtube && (
              <a href={siteConfig.youtube}>
                <Button variant="ghost" size="icon">
                  <YoutubeIcon className="w-7 h-7" />
                </Button>
              </a>
            )}

            {siteConfig.linkedin && (
              <a href={siteConfig.linkedin}>
                <Button variant="ghost" size="icon">
                  <LinkedinIcon className="w-6 h-6" />
                </Button>
              </a>
            )}

            {siteConfig.twitter && (
              <a href={siteConfig.twitter}>
                <Button variant="ghost" size="icon">
                  <TwitterXIcon className="w-5 h-5" />
                </Button>
              </a>
            )}
          </div>
          <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <div>{siteConfig.author}</div>
            <div>{` • `}</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div>{` • `}</div>
            <Link href="/">{siteConfig.businessName}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
