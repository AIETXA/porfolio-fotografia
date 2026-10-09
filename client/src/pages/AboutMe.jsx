import '../styles/about.css'

function AboutMe() {
     return (
        <section className='about-container'>
            <div className="about-header">
              <h1>Sobre mi</h1>
            </div>

              
            <div className="about-card">
                <div className="about-card">
                        <div className='about-detail'>
                            <div className='about-photo'>
                                <img src='' alt='foto de Aietxa'></img>
                            </div>
                        </div>

                        <div className='about-text'>
                            <h2>Para que me conozcas un poco mas: </h2>
                                <p className='bio-lead'>Soy fotografa desde que comence a robar. 
                                    Mi mama tenía una Pentax compacta de rollo, 
                                    yo se la robaba y me escondia abajo de la cama a disparar, 
                                    anda a saber a que....
                                </p>
                                <p>Desde entonces no paré. Me enamoré de los paisajes, de las costumbres, de los detalles que la mayoría pasa por alto. 
                                    Cada foto es una excusa para mirar el mundo con más calma.
                                </p>    
                        </div>
                    </div>
                </div>
               
        </section>
      )
    };
   
export default AboutMe