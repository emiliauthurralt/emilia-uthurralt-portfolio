import React, { Component } from 'react'

export default class IntroCyb extends Component {
    render() {
        return (
            <section id="secIntroCyb" className='flexbox'>
                <img src="./images/Cyb/logorosa.png" alt="" />
                <p class="borderosa margin10 parrafo2Center w750">Aplicación mobile-web para un bar ficticio con temática de arcade destinado a fanáticos de los videojuegos y nostálgicos de los 90s.</p>
                <p className='parrafo2Center margin10'>
                    <span className='bold parrafo1'>Emilia Uthurralt</span><br/>
                    UX/UI Designer<br/>
                    Investigación - Desarrollo - UX - UI<br/>
                    Duración: Dos meses
                </p>
                <a href="https://www.figma.com/proto/pnERgWAYRYiGik6cmipNoF/Proyecto-Cyberland-Arcade-Bar?node-id=0%3A1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=245%3A588" className='linkA margin10' target="blank">Prototipo de alta fidelidad</a>
                
            </section>
        )   
    }
}