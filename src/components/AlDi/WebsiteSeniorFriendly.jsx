import React from 'react'
import Colores from './SeniorFriendly/Colores'
import Fuente from './SeniorFriendly/Fuente'
import Interaccion from './SeniorFriendly/Interaccion'
import Texto from './SeniorFriendly/Texto'

export default function WebsiteSeniorFriendly() {
  return (
    <section className="flexbox">
        <div className="secCyb">
            <h2>02 | Website Senior Friendly</h2>
            <p className="parrafo2 margin10">Planteado el problema, comencé a investigar como lograr que la experiencia del website sea amigable para las personas mayores.</p>
        <Colores/>
        <Texto/>
        <Fuente/>
        <Interaccion/>
        </div>
    </section>
  )
}
