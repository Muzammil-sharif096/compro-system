
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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/trackorder' element={<Trackorder />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/faq' element={<Faq/>} />
        <Route path='/refund' element={<Refund/>} />
        <Route path='/privacy' element={<Privacy/>} />
        <Route path='/terms' element={<Terms/>} />
        <Route path='/shipping' element={<Shipping/>} />





        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/trackorder" element={<Trackorder />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail_product/:id" element={<DetailProduct/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
