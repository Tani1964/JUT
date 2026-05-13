import { images } from '../data/images'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'

const stories = [
  {
    img: images.client1,
    title: 'A Life Changed',
    desc: 'After losing their home, John and his family were able to recover thousands in excess funds, enabling them to start anew. They were grateful for our dedicated team who guided them through every step.',
  },
  {
    img: images.client2,
    title: 'Peace of Mind Restored',
    desc: 'Maria, a widow, was overwhelmed after her husband\'s passing. We assisted her in locating funds from the sale of their home, allowing her to settle affairs and regain financial stability.',
  },
  {
    img: images.client3,
    title: 'A Smooth Process',
    desc: 'The Smith family was initially skeptical about the recovery process, but our professional approach and transparent communication made it seamless, resulting in a successful fund recovery.',
  },
]

const stats = [
  {
    img: images.statsRecovery,
    title: 'High Recovery Rate',
    desc: 'We boast a remarkable recovery rate of over 85%, ensuring that the majority of our clients receive the funds they are entitled to after foreclosure.',
  },
  {
    img: images.statsFeedback,
    title: 'Positive Client Feedback',
    desc: '98% of our clients would recommend us to a friend, reflecting our commitment to excellence and client satisfaction throughout the recovery process.',
  },
  {
    img: images.statsTimely,
    title: 'Timely Recoveries',
    desc: 'On average, we recover funds for our clients within 30–60 days, providing prompt assistance when they need it the most.',
  },
]

const reviews = [
  {
    name: 'James T.',
    location: 'San Jose, CA',
    text: 'JUT SFUNDS RECOVERY made an incredibly stressful situation manageable. They handled everything professionally and kept me informed at every stage.',
    rating: 5,
  },
  {
    name: 'Linda M.',
    location: 'Sacramento, CA',
    text: 'I had no idea I was entitled to excess funds until they reached out. Recovered over $18,000 within 45 days. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Robert K.',
    location: 'Fresno, CA',
    text: 'The team was compassionate and thorough. They worked tirelessly to ensure I received every dollar owed to me.',
    rating: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-1 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <div>
      <PageHero
        title="What Our Clients Say"
        subtitle="Real stories from those we've helped recover their funds"
        bgImage={images.testimonialsBg}
      />

      {/* Client Success Stories */}
      <section className="py-16 px-6 sm:px-10 max-w-7xl mx-auto w-full">
        <SectionHeader
          title="Client Success Stories"
          subtitle="Discover how our services have made a difference in the lives of our clients."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stories.map(({ img, title, desc }) => (
            <div key={title} className="flex flex-col gap-4">
              <img
                src={img}
                alt={title}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                <Button to="/contact" variant="outline">Read More</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Written Reviews */}
      <section className="py-16 px-6 sm:px-10 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="What Clients Are Saying"
            subtitle="Read verified reviews from homeowners we've helped."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {reviews.map(({ name, location, text, rating }) => (
              <div key={name} className="bg-white p-6 border border-gray-200">
                <Stars count={rating} />
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{text}"</p>
                <p className="font-semibold text-gray-900 text-sm">{name}</p>
                <p className="text-gray-400 text-xs">{location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Success in Numbers */}
      <section className="py-16 px-6 sm:px-10 max-w-7xl mx-auto w-full">
        <SectionHeader
          title="Our Success in Numbers"
          subtitle="Discover the effectiveness of our recovery efforts through compelling statistics."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map(({ img, title, desc }) => (
            <div key={title} className="flex flex-col gap-4">
              <img
                src={img}
                alt={title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div>
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
