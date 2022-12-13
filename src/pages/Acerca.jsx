import React from 'react'
import Tecnologias from '../components/About/Tecnologias'
import Games from '../components/About/Games'
import stylesheet from '../css/home.css'
<style>
    {stylesheet}
</style>

function Acerca() {
  return (
    <>
        <header className='headerHome'>
            <h1 className='h1Home'>Emilia <span className='hover-1'>Uthurralt</span></h1>
        </header>
        <section className="flexbox">
            <div className="descAbout bPrueba">
                <p className='aLeft'>UX/UI Designer</p>
                <p>Gamer de teclado</p>
            </div>
            
        </section>
        <section className="divSec">
            <h2>Tecnologías que manejo</h2>
            <Tecnologias/>
        </section>
        <Games/>
    </>
)
}
export default Acerca