
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
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur nam debitis repellat accusantium quis blanditiis voluptatibus ut molestiae esse consequatur! Vero mollitia nemo recusandae aliquam aperiam magnam, beatae sed eum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odit aut commodi dolorum, in, hic beatae, quae ad maxime quia eveniet. Asperiores aspernatur ipsum eius officia dicta voluptates accusantium tempore?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequatur, adipisci eligendi quibusdam iusto consequuntur recusandae iste minus dolores praesentium distinctio quod corrupti voluptatem delectus sint facilis labore, eum vel.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias fugiat pariatur quidem! Praesentium velit, cupiditate quas ullam at asperiores, eligendi ea sunt omnis dolore obcaecati quaerat expedita doloremque eaque deserunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, vitae, exercitationem aspernatur rerum molestias minus autem dolore, deleniti labore hic nemo minima placeat maxime nisi iure nihil quia numquam! Beatae!

        </h1>

      </div>
        
      </div>
          
    </section>
    )

  }




  
export default Home

 
       
