import { Button } from '@/components/shared/ui/button';
import { ComponentDemo } from 'demo/demo';
import { LandingBandSection } from '@/components/landing/LandingBand';
import { LandingFaqSection } from '@/components/landing/LandingFaq';
import { LandingFeatureList } from '@/components/landing/LandingFeatureList';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingSaleCtaSection } from '@/components/landing/LandingSaleCta';
import { LandingTestimonialListSection } from '@/components/landing/LandingTestimonialList';

import {
  ChromeIcon,
  FigmaIcon,
  FramerIcon,
  GithubIcon,
  LayersIcon,
  LightbulbIcon,
  LineChartIcon,
  SparklesIcon,
  ThumbsUpIcon,
  ZapIcon,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center fancy-overlay">
      <div className="w-full flex flex-col items-center gap-8 md:gap-16">
        <section className="narrow-container">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl">
            Instant UX Audit For Your Product Page
          </h1>
          <p className="mt-6 md:text-xl">
            Get AI-powered actionable suggestions to improve your usability,
            conversion and messaging
          </p>

          <a href="/signup" target="_blank" rel="noopener noreferrer">
            <Button size="xl" className="mt-6">
              Get Started
            </Button>
          </a>
        </section>
      </div>

      <LandingBandSection
        className="mt-24"
        title="Boost Your Productivity"
        description="Streamline your workflow and achieve more with our fast, intuitive, and beautiful SaaS solutions."
        logosComponent={
          <>
            <ChromeIcon className="w-12 h-12" />
            <FigmaIcon className="w-12 h-12" />
            <GithubIcon className="w-12 h-12" />
            <FramerIcon className="w-12 h-12" />
          </>
        }
      />

      <LandingProductFeature
        imagePosition="right"
        imageSrc="/static/images/product-sample.webp"
        imageAlt="Product image"
        title="Create Custom Solutions Effortlessly"
        description="With our platform, you can build bespoke SaaS solutions without any prior knowledge or technical ability. Save time and resources while fulfilling your unique business needs."
      />

      <LandingFeatureList
        title="Key Features"
        description="Discover the power of our SaaS solution's features:"
        featureItems={[
          {
            title: 'Drag-and-Drop Interface',
            description:
              'Easily design and customize your SaaS application with our intuitive drag-and-drop interface.',
            icon: <LayersIcon />,
          },
          {
            title: 'Seamless Integration',
            description:
              'Effortlessly connect your SaaS solution with existing systems and applications for streamlined workflows.',
            icon: <LineChartIcon />,
          },
          {
            title: 'Advanced Analytics',
            description:
              'Gain valuable insights into user behavior, performance metrics, and trends with our comprehensive analytics tools.',
            icon: <SparklesIcon />,
          },
          {
            title: 'Secure Data Storage',
            description:
              'Rest easy knowing that your data is safeguarded with our state-of-the-art security measures and robust data storage protocols.',
            icon: <LightbulbIcon />,
          },
          {
            title: 'Automated Updates',
            description:
              'Stay up-to-date with the latest features and enhancements through our automatic software updates, ensuring optimal performance.',
            icon: <ZapIcon />,
          },
          {
            title: 'Flexible Scalability',
            description:
              'Easily scale your SaaS solution as your business grows, accommodating increased demand and expanding user base.',
            icon: <ThumbsUpIcon />,
          },
        ]}
      />

      <LandingFaqSection
        title="Frequently Asked Questions"
        description="Find answers to common inquiries about our SaaS solutions:"
        faqItems={[
          {
            question:
              'Can I integrate my existing systems with your SaaS solutions?',
            answer:
              'Absolutely! Our platform offers seamless integration with various third-party applications and systems.',
          },
          {
            question:
              'Do I need programming skills to use your SaaS solutions?',
            answer:
              "No, you don't. Our user-friendly interface empowers users without technical backgrounds to create and manage their own SaaS applications.",
          },
          {
            question: 'Is my data secure with Generic SaaS Solutions?',
            answer:
              'We prioritize data security. Our solutions employ robust security measures to protect your sensitive information.',
          },
        ]}
      />

      <LandingTestimonialListSection
        title="What Our Customers Say"
        description="Hear from our satisfied clients about their experience with our SaaS solutions:"
        testimonialItems={[
          {
            name: 'John Smith',
            text: 'Generic SaaS Solutions revolutionized the way we manage our operations. Our productivity has soared, thanks to their highly customizable platform.',
            handle: '@john_smith',
            imageUrl: 'https://picsum.photos/800/400?random=1',
            url: '#',
            size: 'full',
          },
          {
            name: 'Emily Johnson',
            text: "I was able to create my own SaaS application from scratch, even with minimal technical knowledge. It's empowering to have complete control over my business processes.",
            handle: '@emily_johnson',
            imageUrl: 'https://picsum.photos/800/400?random=2',
            url: '#',
            size: 'half',
          },
          {
            name: 'David Rodriguez',
            text: 'The advanced analytics provided by Generic SaaS Solutions allowed us to identify bottlenecks and optimize our workflows, resulting in significant cost savings.',
            handle: '@david_rodriguez',
            imageUrl: 'https://picsum.photos/800/400?random=3',
            url: '#',
            size: 'half',
          },
        ]}
      />

      <LandingSaleCtaSection
        title="Unlock Your Potential"
        description="Take your business to new heights with our innovative SaaS solutions. Increase efficiency and maximize revenue."
        ctaHref={'#'}
        ctaLabel={'Pre-order now'}
      />

      <div className="w-full flex flex-col items-center gap-8 md:gap-16">
        <section className="ultrawide-container">
          <ComponentDemo />
        </section>
      </div>
    </div>
  );
}
