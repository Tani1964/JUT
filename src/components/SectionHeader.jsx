export default function SectionHeader({ title, subtitle, className = '' }) {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{title}</h2>
      {subtitle && <p className="text-gray-500 text-sm sm:text-base">{subtitle}</p>}
    </div>
  )
}
