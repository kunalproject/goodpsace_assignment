
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/HeaderSection/Header';
import MidSection from './components/Mid-section/MidSection';
import Integrations from './components/intergration/Integrations';
 import Testimonial from './components/testimonial/Testimonial';
 import Footer_section from './components/footer-section/Footer_section';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <MidSection/>
      <Integrations/>
      <Testimonial/>
      <Footer_section/>
      
    </div>
  );
}

export default App;
