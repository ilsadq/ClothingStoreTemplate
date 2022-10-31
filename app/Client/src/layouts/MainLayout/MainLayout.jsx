import { useState } from 'react';
import { Outlet } from 'react-router-dom'

import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header";

import ThemeContext from '../../contexts/ThemeContext';

import './MainLayout.sass';

export const MainLayout = () => {
  const [theme, setTheme] = useState(false);

  const switchTheme = () => {
    setTheme((old) => old = !theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <div className={theme ? 'dark' : 'light'}>
        <div className="wrapper">
          <div className="container">
            <Header />
          </div>
          <main className="flex-auto">
            <Outlet />
          </main>
          <div className="container">
            <Footer />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default MainLayout;
