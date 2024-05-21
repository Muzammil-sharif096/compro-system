import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import Trackorder from './Components/Trackorder/Trackorder';
import Aboutus from './Components/AboutUs/Aboutus';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Faq from './Components/Faq/Faq';
import Refund from './Components/Refund/Refund';
import Privacy from './Components/Privacy/Privacy';
import Terms from './Components/Terms/Terms';
import Shipping from './Components/Shipping/Shipping';
import DetailProduct from './Components/Home/DetailProduct';
import AllItems from './Components/AllItems/AllItems';
import Blogdetail from './Components/Blogdetail/Blogdetail';
import Blogdetail2 from './Components/Blogdetail2/Blogdetail2';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/trackorder" element={<Trackorder />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail_product/:id" element={<DetailProduct />} />
        <Route path="/allitems/:category" element={<AllItems />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/blogdetail" element={<Blogdetail />} />
        <Route path="/blogdetail2" element={<Blogdetail2 />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;