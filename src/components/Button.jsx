import { Link } from 'react-router-dom'

export default function Button({ children, to, onClick, variant = 'dark', className = '' }) {
  const base = 'inline-block px-5 py-2 text-sm font-medium border transition-colors cursor-pointer'
  const variants = {
    dark: 'bg-gray-800 text-white border-gray-800 hover:bg-gray-700',
    outline: 'bg-transparent text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white',
    gold: 'bg-brand-gold text-white border-brand-gold hover:opacity-90',
  }

  const cls = `${base} ${variants[variant]} ${className}`

  if (to) return <Link to={to} className={cls}>{children}</Link>
  return <button onClick={onClick} className={cls}>{children}</button>
}
