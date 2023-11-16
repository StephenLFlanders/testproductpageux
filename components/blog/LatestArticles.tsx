import Link from '@/components/shared/Link';
import Tag from '@/components/shared/Tag';
import { siteConfig } from '@/data/config/site.settings';
import { formatDate } from 'pliny/utils/formatDate';
import NewsletterForm from 'pliny/ui/NewsletterForm';
import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer';
import { allBlogs } from 'contentlayer/generated';

const MAX_DISPLAY = 2;

export default function LatestArticles() {
  const sortedPosts = sortPosts(allBlogs);
  const posts = allCoreContent(sortedPosts);

  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-4xl">
          Latest articles
        </h2>

        <ul className="flex flex-col gap-4">
          {!posts.length && 'No articles found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { path, slug, date, title, summary, tags } = post;
            return (
              <li
                key={slug}
                className="flex md:bg-white dark:md:bg-black rounded-md overflow-hidden relative md:shadow-sm md:hover:shadow-xl dark:md:hover:bg-slate-800 transition-all"
              >
                <article className="flex flex-col gap-2 py-5 md:p-8">
                  <Link
                    href={`/${path}`}
                    className="text-gray-900 dark:text-gray-100 absolute left-0 top-0 w-full h-full"
                  >
                    <span className="sr-only">Read more about {title}</span>
                  </Link>

                  <div className="space-y-3">
                    <div>
                      <h2 className="text-3xl leading-8 tracking-tight">
                        {title}
                      </h2>

                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>
                            {formatDate(date, siteConfig.locale)}
                          </time>
                        </dd>
                      </dl>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {summary}
                    </div>
                  </div>

                  <div className="flex flex-wrap relative">
                    {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>

      {posts.length > MAX_DISPLAY && (
        <div className="mt-12 flex text-base font-medium leading-6">
          <Link
            href={siteConfig.allArticlesPath}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="See all articles"
          >
            See all articles &rarr;
          </Link>
        </div>
      )}

      {siteConfig.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  );
}
