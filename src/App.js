import './App.css'
import About from './components/AboutUs/About';
import ContactUs from './components/ContactUs/ContactUs';
import {Navbar ,Header ,Features ,Download ,Subscribe ,FAQs,Footer } from './components/index';
import Teachers from './components/Teachers/Teachers';


function App() {
  return (
    <main>

      <header className='header-bg'>

      <Navbar />
      <Header />

      </header>
      <About />
      <Features />
      <Teachers />
      <Subscribe />
      <Download />
      <ContactUs />
      <FAQs />
      <Footer />
      
    </main>
  );
}

export default App;
