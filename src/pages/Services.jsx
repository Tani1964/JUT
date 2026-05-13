import { images } from '../data/images'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'

const excessFund = [
  {
    img: images.recoveryStrategy,
    title: 'Tailored Recovery Strategies',
    desc: 'We create customized strategies to recover excess funds from your home sales. Our experienced team analyzes your specific situation, ensuring that no potential funds are overlooked, helping you regain what is rightfully yours.',
    cta: 'Learn More',
  },
  {
    img: images.contingency,
    title: 'No Upfront Costs',
    desc: 'At JUT SFUNDS RECOVERY, we operate on a contingency fee basis. This means you pay us only when we successfully recover funds for you. Our commitment is to provide you with financial relief without any initial financial burden.',
    cta: 'Discover How',
  },
  {
    img: images.paperwork,
    title: 'Thorough Documentation',
    desc: 'We meticulously gather and prepare all necessary documentation to support your claim. Our team ensures that every detail is accounted for, streamlining the process and enhancing the chances of successful recovery.',
    cta: 'Get Started',
  },
]

const legalCoord = [
  {
    img: images.probate,
    title: 'Collaboration with Attorneys',
    desc: 'Our team works closely with foreclosure and probate attorneys to facilitate your claim process. We ensure all legal requirements are met, providing you with the peace of mind that your case is in expert hands.',
    side: 'right',
  },
  {
    img: images.legalTeam,
    title: 'Comprehensive Legal Support',
    desc: 'We offer support in coordinating legal actions, whether for contested claims or other legal matters. Our knowledgeable team is here to guide you through every step, ensuring your interests are protected.',
    side: 'left',
  },
  {
    img: images.ref,
    title: 'Experienced Legal Referrals',
    desc: 'When litigation arises, we refer you to licensed counsel who specializes in your specific needs. Our network of experienced attorneys is ready to provide the legal expertise necessary for successful outcomes.',
    side: 'right',
  },
]

const evidenceItems = [
  {
    img: images.courtRecords,
    title: 'Detailed Evidence Collection',
    desc: 'We systematically gather all relevant evidence needed for legal filings. This includes court records, trustees reports, and sale confirmations, ensuring that your case is thoroughly documented and supported.',
  },
  {
    img: images.documents,
    title: 'Comprehensive File Preparation',
    desc: 'Our team compiles all gathered evidence into a well-organized file that is easy for attorneys and courts to review, increasing the likelihood of a successful claim outcome.',
  },
]

export default function Services() {
  return (
    <div>
      <PageHero
        title="Our Comprehensive Services"
        subtitle="Helping You Navigate Fund Recovery with Expertise"
        bgImage={images.servicesBg}
      />

      {/* Excess Fund Recovery */}
      <section className="py-16 px-6 sm:px-10 max-w-7xl mx-auto w-full">
        <SectionHeader
          title="Excess Fund Recovery"
          subtitle="Maximize Your Financial Recovery Efforts"
        />
        <div className="space-y-6">
          {excessFund.map(({ img, title, desc, cta }) => (
            <div key={title} className="flex flex-col sm:flex-row gap-0 border border-gray-200 overflow-hidden">
              <img
                src={img}
                alt={title}
                className="w-full sm:w-72 h-52 object-cover flex-shrink-0"
                loading="lazy"
              />
              <div className="p-6 flex flex-col justify-center">
                <h3 className="font-bold text-gray-900 text-lg mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{desc}</p>
                <div>
                  <Button to="/contact" variant="outline">{cta}</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expert Legal Coordination */}
      <section className="py-16 px-6 sm:px-10 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Expert Legal Coordination"
            subtitle="Navigating Legal Complexities with Ease"
          />
          <div className="space-y-8">
            {legalCoord.map(({ img, title, desc, side }) => (
              <div
                key={title}
                className={`flex flex-col gap-0 ${side === 'left' ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full sm:w-64 h-58 object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div className="bg-white p-6 flex flex-col justify-center flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Efficient Evidence Gathering */}
      <section className="py-16 px-6 sm:px-10 max-w-7xl mx-auto w-full">
        <SectionHeader
          title="Efficient Evidence Gathering"
          subtitle="Building a Strong Case for Recovery"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {evidenceItems.map(({ img, title, desc }) => (
            <div key={title} className="border border-gray-200 overflow-hidden">
              <img
                src={img}
                alt={title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-green py-14 px-6 text-center">
        <h2 className="text-white text-2xl font-bold mb-4">Start Your Recovery Today</h2>
        <p className="text-gray-300 text-sm mb-8 max-w-md mx-auto">
          No upfront costs. No risk. We only succeed when you do.
        </p>
        <Button to="/contact" variant="gold">Get a Free Consultation</Button>
      </section>
    </div>
  )
}
