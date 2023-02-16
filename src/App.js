//import styles
import './App.css';
//components
import NabBar from './components/NavBar'
import Hero from './components/Hero'
import Works from './components/Works'
import Footer from './components/Footer'
import ButtonIrArriba from './components/ButtonIrArriba'

function App() {

  return (
    <div className="App">
      <NabBar />
      <Hero />
      <Works />
      <Footer />
      <ButtonIrArriba />
    </div>
  );
}

export default App;
