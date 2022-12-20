/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Tecnologias from '../components/About/Tecnologias'
import Games from '../components/About/Games'
import stylesheet from '../css/about.css'
import Contacto from '../components/About/Contacto'
<style>
    {stylesheet}
</style>

function Acerca() {
return (
    <>
        
            <Contacto/>    
        <section className="divSec">
            <h2 className='acercaH2'>Tecnologías que manejo</h2>
            <Tecnologias/>
        </section>
        <section className='divSec'>
            <h2>Intereses</h2>
            <Games/>
        </section>
        
    </>
)
}
export default Acerca