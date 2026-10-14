import '../styles/about.css'


import aboutImg from '../assets/about-img-2.png'



function AboutMe() {
     return (
        <section className='about-container'>
            <div className="about-header">
              
            </div>

                <div className="about-grid">
                        <div className='about-left-detail'>
                            <div className='about-photo'>
                                <img src={aboutImg} alt='foto de Aietxa'></img>
                            </div>
                        </div>

                        <div className='about-right-detail'>
                            <h2>Para que me conozcas un poco mas </h2>
                                <p className='bio-lead'>Soy fotógrafa desde que comencé a robar. 
                                    Mi mamá tenía una Vivitar compacta de rollo, 
                                    yo se la robaba y me escondía abajo de la cama a disparar, 
                                    anda a saber a qué....
                                    Desde entonces no paré. Me enamoré de los paisajes, de las costumbres, de los detalles que la mayoría pasa por alto. 
                                    Cada foto es una excusa para mirar el mundo con más calma.
                                </p>    
                        </div>
                    </div>
                
               
        </section>
      )
    };
   
export default AboutMe