import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Plane from './pages/Plane';
import Bamyan from './pages/Bamyan';
import Booking from './pages/Booking';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
        <Route path='/bamyan' element={<Bamyan />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/plan' element={<Plane />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
