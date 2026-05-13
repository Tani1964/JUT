import { useState } from 'react'

const faqs = [
  {
    q: 'What are excess funds?',
    a: 'Excess funds are the surplus amount realized from a home sale after the foreclosure process. When a property sells for more than the outstanding mortgage balance, the difference is considered excess funds, which may be recoverable by the homeowner or their heirs.',
  },
  {
    q: 'How does the recovery process work?',
    a: 'Our recovery process begins with a thorough examination of court records and trustee reports to identify potential excess funds. We then assist in gathering necessary documentation and coordinating with legal professionals to submit claims on your behalf, ensuring a smooth recovery process.',
  },
  {
    q: 'Is there any cost to initiate recovery?',
    a: 'No. We operate on a contingency fee basis, which means there are absolutely no upfront costs. We only charge a fee when we successfully recover funds on your behalf, so you have nothing to lose by starting the process.',
  },
  {
    q: 'How long does the recovery process take?',
    a: 'The timeline varies depending on the complexity of each case, but on average we recover funds within 30–60 days. We keep you updated throughout every stage of the process.',
  },
  {
    q: 'Can heirs claim excess funds?',
    a: 'Yes. Heirs of the deceased homeowner may be entitled to excess funds from the estate. We assist heirs in establishing legal standing and navigating the probate process to ensure rightful distribution.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <div className="divide-y divide-gray-200 border-t border-gray-200">
      {faqs.map(({ q, a }, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between py-4 text-left text-sm font-medium text-gray-900 hover:text-brand-green transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{q}</span>
            <svg
              className={`w-4 h-4 flex-shrink-0 ml-4 transition-transform ${open === i ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <div className="pb-4 pr-8">
              <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
