/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

export default function Contacto() {
return (
    <>
        <header className='headerAbout headerHome'>
            <div className="introAbout">
                <div class="introAbout1">
                    <h1 className='h1Home'>Emilia <span className='hover-1'>Uthurralt</span></h1>
                    <h2 className="parrafo1 margin20">UX/UI Designer<br/>
                    Keyboard gamer</h2>
                    <p className="parrafo2 margin20">👋 Buenos Aires, Argentina.</p>
                    <p className="parrafo2 margin20">Dejé mis estudios en robótica para dedicarme al diseño.<br/><br/>Busco especializarme en la aplicación de UX y UI en la industria de los videojuegos.</p></div>
                <div class="introAbout2">
                    <img src="images/About/Contacto/foto.png" alt="Acá iría una foto mía" />
                    <p className='parrafo2  margin20'>emiliauthurralt@gmail.com</p>

                    <div class="gridContacto">
                        <div class="cv">
                            <a href="https://www.figma.com/proto/l1W2s2m3C832HKAxVeSwoV/CV-Emilia-Uthurralt?page-id=0%3A1&node-id=11%3A44&viewport=1094%2C394%2C0.71&scaling=min-zoom&starting-point-node-id=11%3A44" target="_blank" className=' margin20'><img src="images/About/Contacto/cv.png" alt="" /></a>
                        </div>
                        <div class="linkedIn">
                            <a href="https://www.linkedin.com/in/emilia-uthurralt/" target="_blank"><img src="images/About/Contacto/linkedin.png" alt="" className=' margin20' /></a>
                        </div>
                        <div class="textoCv"><p>Curriculum<br/>Vitae</p></div>
                        <div class="textolinkedIn"><p>LinkedIn</p></div>
                    </div>
                </div>
            </div>
        </header>
    </>
)
}
