import './App.css'
import { Routes , Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CasePage from './pages/CasePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import DetailPage from './pages/DetailPage';
import Wishlistpage from './pages/WishlistPage';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import AddPage from './pages/AddPage/AddPage';
import BasketPage from './pages/BasketPage';

function App() {

  return (
   <>
   <Navbar/>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/case" element={<CasePage/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/add" element={<AddPage/>} />
        <Route path="/detail/:id" element={<DetailPage/>} />
        <Route path="/wishlist" element={<Wishlistpage/>} />
        <Route path="/basket" element={<BasketPage/>} />
      </Routes>
   <Footer/>
   </>
  )
}

export default App
