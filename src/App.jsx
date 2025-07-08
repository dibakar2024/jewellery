import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
import ProductDetails from './Pages/ProductDetails';
import Footer from './Components/Footer';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import ThankYouPage from './Pages/ThankYou';
import BlogDetails from './Pages/BlogDetails';
import TermsPage from './Pages/Terms';
import PrivacyPage from './Pages/Privacy';
import ContactPage from './Pages/Contact';
import FAQPage from './Pages/FAQ\'s';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/terms" element ={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        {/* other routes */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
