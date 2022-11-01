import Header from "../components/header/header";
import Footer from '../components/footer/footer';

export default function MainLayout({ children }) {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
      </div>
      {children}
      <div className="container">
        <Footer />
      </div>
    </div>
  )
}
