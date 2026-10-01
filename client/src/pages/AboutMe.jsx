import '../styles/about.css'

function AboutMe() {
     return (
        <>
            <div className="about-me">
              <h1>Sobre mi</h1>
            </div>

              
            <div className="me-container">
            <div className="me">
                <div className="me-photo">
                    <img src="#" alt="Foto de Ailén"/>
                </div>
                <div className="me-text">
                    <h3>Para que me conozcas un poco mas: </h3>
                    <p>Soy fotografa desde que comence a robar. 
                        Mi mama tenía una Pentax compacta de rollo, 
                        yo se la robaba y me escondia abajo de la cama a disparar, 
                        anda a saber a que....</p>
                    <p>Desde entonces no paré. Me enamoré de los paisajes, de las costumbres, de los detalles que la mayoría pasa por alto. 
                        Cada foto es una excusa para mirar el mundo con más calma.</p>    
                </div>
              </div>
            </div>
        </>
      )
    }
   
    export default AboutMe