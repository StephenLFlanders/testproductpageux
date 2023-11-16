import { cn } from '@/lib/utils';

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * A component meant to be used in the landing page.
 * It displays a list of frequently asked questions and their answers.
 */
export const LandingFaqSection = ({
  className,
  title,
  description,
  faqItems,
}: {
  className?: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  faqItems: FaqItem[];
}) => {
  return (
    <div className={cn(className, 'narrow-container mt-12 lg:mt-16')}>
      <h2 className="text-4xl font-semibold leading-tight max-w-xs sm:max-w-none md:text-5xl fancyHeading">
        {title}
      </h2>
      <p className="mt-6 md:text-xl">{description}</p>

      <ul
        className={cn(
          'mt-12 grid md:grid-cols-2 gap-8 md:gap-12 faq',
          className,
        )}
      >
        {faqItems.map((faqItem, index) => (
          <li key={index}>
            <h3>{faqItem.question}</h3>
            <p>{faqItem.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
