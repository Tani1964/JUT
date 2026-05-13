import { Link } from 'react-router-dom'
import { images } from '../data/images'
import Button from '../components/Button'
import SectionHeader from '../components/SectionHeader'

const features = [
  {
    img: images.attorney,
    title: 'Expert Coordination',
    desc: 'We work closely with foreclosure and probate attorneys to streamline your recovery process, ensuring that every legal aspect is handled professionally.',
  },
  {
    img: images.courthouse,
    title: 'Thorough Investigations',
    desc: 'Our team conducts comprehensive searches through state unclaimed property databases to recover funds that have been transferred to state custody.',
  },
  {
    img: images.documents,
    title: 'Complete Case Management',
    desc: 'We gather all necessary documentation, including court records and trustee reports, to build a robust case for your claim submission.',
  },
]

const support = [
  {
    img: images.teamMeeting,
    title: 'Legal Coordination',
    desc: 'We facilitate connections with licensed attorneys to address any litigation or contested claims that may arise during the recovery process. Our goal is to ensure you have the best legal support available.',
  },
  {
    img: images.evidence,
    title: 'Evidence Gathering',
    desc: 'Our team specializes in compiling evidence for legal filings, collecting necessary documents, and ensuring that your case is thoroughly prepared for submission to maximize your chances of recovery.',
  },
  {
    img: images.houseKeys,
    title: 'Heir Support Services',
    desc: 'For heirs, we assist in establishing legal standing and coordinating necessary probate filings, ensuring a smooth process for the distribution of recovered funds to rightful beneficiaries.',
  },
]

const experts = [
  {
    img: images.expert1,
    title: 'No Upfront Costs',
    desc: 'We operate on a contingency fee basis, meaning you pay nothing until we successfully recover funds for you. This ensures that our interests are aligned with yours.',
  },
  {
    img: images.expert2,
    title: 'Tailored Solutions',
    desc: 'Our approach is personalized to meet the unique needs of each client, ensuring that we provide the most effective strategies for your specific situation.',
  },
  {
    img: images.expert3,
    title: 'Transparent Process',
    desc: 'We keep you informed every step of the way, providing clear communication and updates on the progress of your claims, so you always know where you stand.',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[520px] flex items-center px-6 sm:px-10"
        style={{
          backgroundImage: `url(${images.heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 bg-brand-green/85" />
        <div className="relative z-10 max-w-2xl py-20">
          <p className="text-brand-gold font-semibold text-lg mb-3 uppercase tracking-wide">
            Empowering Homeowners.
          </p>
          <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Recovering Your Financial Rights After Foreclosure
          </h1>
          <div className="flex flex-wrap gap-4">
            <Button to="/services" variant="gold">Our Services</Button>
            <Button to="/contact" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 sm:px-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ img, title, desc }) => (
            <div key={title} className="flex flex-col gap-4">
              <img
                src={img}
                alt={title}
                className="w-full h-52 object-cover"
                loading="lazy"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comprehensive Support */}
      <section className="py-16 px-6 sm:px-10 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Comprehensive Support"
            subtitle="We provide a range of services specifically designed to assist homeowners in recovering funds after foreclosure."
          />
          <div className="space-y-6">
            {support.map(({ img, title, desc }) => (
              <div key={title} className="flex flex-col sm:flex-row gap-5 bg-white p-0 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full sm:w-40 h-40 object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div className="p-4 sm:p-5 flex flex-col justify-center">
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Experts */}
      <section className="py-16 px-6 sm:px-10 max-w-7xl mx-auto w-full">
        <SectionHeader
          title="Your Recovery Experts"
          subtitle="We pride ourselves on our extensive expertise and commitment to helping you recover what you deserve."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {experts.map(({ img, title, desc }) => (
            <div key={title} className="flex flex-col gap-3">
              <img
                src={img}
                alt={title}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <h3 className="font-bold text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-green py-14 px-6 text-center">
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4">
          Ready to Recover What's Rightfully Yours?
        </h2>
        <p className="text-gray-300 mb-8 text-sm sm:text-base max-w-lg mx-auto">
          Get a free consultation today. Our team is ready to help you navigate the recovery process.
        </p>
        <Button to="/contact" variant="gold">Get Started</Button>
      </section>
    </div>
  )
}
