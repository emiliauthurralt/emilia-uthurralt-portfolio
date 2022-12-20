import React from 'react'

function Games() {
return (
    <section className='flexbox'>
        <div className="divSec">
          <h3 className='parrafo1'>Videojuegos</h3>
        <div class="videojuegosAbout">
            
            <div class="favoritosJ">
                <h3>Jugando</h3>
            </div>
            <div class="jugandoJ">
                <h3>Favoritos</h3>
            </div>
            <div class="cJuegos">
                <div class="hk">
                    <img src="./images/About/games/image 15.png" alt="" />
                    <p>Hollow Knight</p>
                </div>
                <div class="sp">
                    <img src="./images/About/games/image 12.png" alt="" />
                    <p>Spiritfarer</p>
                </div>
                <div class="ox">
                    <img src="./images/About/games/image 13.png" alt="" />
                    <p>Oxenfree</p>
                </div>
                <div class="rl">
                    <img src="./images/About/games/image 14.png" alt="" />
                    <p>Rusty Lake: Roots</p>
                </div>
            </div>
            <div class="fJuegos">
                <div class="omori">
                    <img src="./images/About/games/hades.png" alt="" />
                    <p>Hades</p>
                </div>
                <div class="antichamber">
                <img src="./images/About/games/image 10.png" alt="" />
                <p>Antichamber</p>
                </div>
                <div className="textoDisc">
                También participo activamente de comunidades en Discord!
                </div>
                <div className="discord">
                    <img src="images/About/Contacto/discord.png" alt="" />
                </div>
            </div>
            </div>
        </div>
        </section>
)
}

export default Games