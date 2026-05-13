import { images } from '../data/images'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import FAQ from '../components/FAQ'

const articles = [
  {
    img: images.blog1,
    title: 'The Role of Probate in Fund Recovery',
    date: 'May 2, 2026',
    excerpt: 'When a homeowner passes away, their estate, including any potential excess funds from a foreclosure sale, must go through probate. Learn how this process affects your recovery...',
  },
  {
    img: images.blog2,
    title: 'Navigating State Unclaimed Property Databases',
    date: 'May 2, 2026',
    excerpt: 'Did you know that unclaimed funds could be waiting for you? This post will guide you through the process of searching state databases to locate funds that may belong to you...',
  },
  {
    img: images.blog3,
    title: 'Understanding Foreclosure Excess Funds',
    date: 'May 2, 2026',
    excerpt: 'Foreclosure can be a devastating experience, but many homeowners are unaware that they may be owed excess funds after the sale. Find out how to determine if you qualify...',
  },
]

const legalDocs = [
  {
    img: images.docForeclosure,
    title: 'Foreclosure Process Overview',
    desc: 'This document provides a detailed overview of the foreclosure process, outlining each step that homeowners face. Understanding these stages can empower you to navigate your situation more effectively and recognize your rights during recovery.',
  },
  {
    img: images.docProbate,
    title: 'Probate Filing Guide',
    desc: 'Our probate filing guide walks you through the necessary steps to establish legal standing as an heir. This resource includes tips on gathering documentation and understanding the probate timeline, ensuring you are prepared for this important process.',
  },
  {
    img: images.docChecklist,
    title: 'Claim Submission Checklist',
    desc: 'Use this checklist to ensure you have all the necessary documentation for a successful claim submission. It covers everything from court records to evidence gathering, making the recovery process as streamlined as possible.',
  },
]

export default function Resources() {
  return (
    <div>
      <PageHero
        title="Valuable Resources for Homeowners"
        subtitle="Explore our curated collection of guides, articles, and FAQs to aid in your recovery journey."
        bgImage={images.resourcesBg}
      />

      {/* Blog / Insights */}
      <section className="py-16 px-6 sm:px-10 max-w-7xl mx-auto w-full">
        <SectionHeader
          title="Insights on Fund Recovery"
          subtitle="Stay informed with our comprehensive articles on navigating the complexities of fund recovery."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {articles.map(({ img, title, date, excerpt }) => (
            <article key={title} className="flex flex-col gap-3">
              <img
                src={img}
                alt={title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-400 text-xs mb-2">{date}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 sm:px-10 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Common Questions"
            subtitle="Find answers to frequently asked questions about our fund recovery services and how we can assist you."
          />
          <FAQ />
        </div>
      </section>

      {/* Essential Legal Documents */}
      <section className="py-16 px-6 sm:px-10 max-w-7xl mx-auto w-full">
        <SectionHeader
          title="Essential Legal Documents"
          subtitle="Access key legal documents and resources to assist you in your recovery efforts."
        />
        <div className="space-y-8">
          {legalDocs.map(({ img, title, desc }) => (
            <div key={title} className="flex flex-col sm:flex-row gap-0 overflow-hidden">
              <img
                src={img}
                alt={title}
                className="w-full sm:w-56 h-44 object-cover flex-shrink-0"
                loading="lazy"
              />
              <div className="p-5 flex flex-col justify-center">
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
