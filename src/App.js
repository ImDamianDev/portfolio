//import styles
import './App.css';
//components
import NabBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About';
import Works from './components/Works'
import Footer from './components/Footer'
import ButtonIrArriba from './components/ButtonIrArriba'

function App() {

  return (
    <div className="App">
      <NabBar />
      <div className='main-box container-fluid'>
      <Hero />
      <About />
      <Works />
      <Footer />
      <ButtonIrArriba />
      </div>
    </div>
  );
}

export default App;
