import { useEffect, useState } from 'react';
//import styles
import './ButtonIrArriba.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function ButtonIrArriba() {

  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(()=>{
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    }
  }, [])

  return (
    <div id="button-ir-arriba" type="button" onClick={scrollToTop} className={isVisible ? "opacity-100" : "opacity-0"}>
      <FontAwesomeIcon icon={icon({ name: 'chevron-up', style: 'solid' })} size="2x" />
    </div>
  );
}

export default ButtonIrArriba;