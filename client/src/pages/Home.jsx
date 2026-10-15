
import { Navigation, Pagination } from "swiper/modules"
import { Link } from "react-router-dom"
import '../styles/home.css'
import { useTheme } from '../hooks/useTheme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

//import portfolioImg from '../assets/mirar-img.png'
import portfolioImg from '../assets/observar-img-2.png'

function Home() {
  return (
    <section className="home-container">
      <Link to='/galery' className="home-layout">
       

        <div className="home-center-content">
          <div className="image-wrapper">
            <img src={portfolioImg} alt="mirar" className="home-image"></img>
            <span className="hover-reveal-text">
              mi galeria <FontAwesomeIcon icon={faArrowRight} />
            </span>
            
          </div>

        </div>
      </Link>   
    </section>
    )

  }
        
export default Home

 
       
