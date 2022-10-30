import { Link } from 'react-router-dom'
import { SunIcon, MoonIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <header className="h-20 bg-white border-x grid grid-cols-3 items-center text-neutral-900">
      <div className='flex justify-center items-center' style={{ gridArea: '1 / 2 / 2 / 3' }}>
        <ul className="h-10 flex items-center gap-x-6 px-4 border rounded-full shadow-sm">
          <li className='hover:text-pink-400 transition-colors'>
            <Link to="/">Home</Link>
          </li>
          <li className='hover:text-pink-400 transition-colors'>
            <Link to="/">Market</Link>
          </li>
          <li className='hover:text-pink-400 transition-colors'>
            <Link to="/">About</Link>
          </li>
          <li className='hover:text-pink-400 transition-colors'>
            <button className='text-sky-400 hover:text-sky-600'>Search</button>
          </li>
        </ul>
      </div>
      <div className='flex items-center justify-center gap-x-4' style={{ gridArea: '1 / 3 / 2 / 4' }}>
        <button className='flex items-center justify-center hover:text-pink-400 transition-colors w-10 h-10 rounded-full border shadow-sm'>
          <span className='w-6 h-6'>
            <ShoppingCartIcon />
          </span>
        </button>
        <button className='flex items-center justify-center text-emerald-400 hover:text-emerald-500 transition-colors w-10 h-10 rounded-full border shadow-sm'>
          <span className='w-6 h-6'>
            <SunIcon />
          </span>
        </button>
      </div>
    </header>
  )
}

export default Header;
