import { Outlet } from 'react-router-dom'

import Footer from "../components/Footer"
import Header from "../components/Header";

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-stone-100">
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
  )
}

export default MainLayout;