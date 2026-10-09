
import { Navigation, Pagination } from "swiper/modules"
import { Link } from "react-router-dom"
import '../styles/home.css'
import { useTheme } from '../hooks/useTheme'

import portfolioImg from '../assets/portfolio-img.png'


function Home() {
  return (
    <section className="home-container">
      <div className="home-card">

        <img src={portfolioImg} alt="porfolio-foto"></img>
      
      <div className="home-info">
        <h1>soy la home

        </h1>

      </div>
        
      </div>
          
    </section>
    )

  }




  
export default Home

 
       
