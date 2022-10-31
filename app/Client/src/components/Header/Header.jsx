import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { SunIcon, MoonIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import ThemeContext from '../../contexts/ThemeContext'

import './Header.sass'

const Header = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className='navbar'>
        <ul className="links__wrapper">
          <li className='link'>
            <Link to="/">Home</Link>
          </li>
          <li className='link'>
            <Link to="/">Market</Link>
          </li>
          <li className='link'>
            <Link to="/">About</Link>
          </li>
          <li className='link'>
            <button className='btn-primary'>Search</button>
          </li>
        </ul>
      </div>
      <div className='actions__wrapper'>
        <button className='btn hover:text-pink-400 transition-colors'>
          <span className='icon'>
            <ShoppingCartIcon />
          </span>
        </button>
        <button onClick={switchTheme} className='btn text-emerald-400 hover:text-emerald-500'>
          <span className='icon'>
            {theme ? <MoonIcon /> : <SunIcon />}
          </span>
        </button>
      </div>
    </header>
  )
}

export default Header;
