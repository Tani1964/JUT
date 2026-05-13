export default function PageHero({ title, subtitle, bgImage }) {
  return (
    <div
      className="relative h-52 sm:h-64 flex items-end pb-10 px-6 sm:px-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <h1 className="text-white text-3xl sm:text-4xl font-bold mb-2">{title}</h1>
        {subtitle && <p className="text-gray-200 text-sm sm:text-base">{subtitle}</p>}
      </div>
    </div>
  )
}
