//import styles
import './App.css';
//components
import NabBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About';
import Timeline from './components/Timeline';
import Works from './components/Works'
import Footer from './components/Footer'
import ButtonIrArriba from './components/ButtonIrArriba'

function App() {

  return (
    <div className="App">
      <NabBar />
      <div className='main-box fluid'>
        <Hero />
        <div className='container'>
          <About />
          <Timeline />
          <Works />
        </div>
        <Footer />
        <ButtonIrArriba />
      </div>
    </div>
  );
}

export default App;
