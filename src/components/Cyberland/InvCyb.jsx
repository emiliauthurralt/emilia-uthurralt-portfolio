import React from 'react'

export default function InvCyb() {
    return (
        <section id="invCyb" className='flexbox'>
            <div className="secCyb margin10">
                <h2>Investigación</h2>
                <p className="parrafo2 break margin10">Para identificar a los posibles clientes del bar y sus necesidades, realicé múltiples entrevistas de forma online por la plataforma Discord. {'\n'}
                <br/><span className='bold'>Se identificaron dos tipos de usuarios:</span></p>
                <div class="invGrid margin10">
                    <div class="gridDiv1 margin10">
                        <h3 className='bordeturquesa'>Organizadores de eventos</h3>
                        <div class="gridInv ">
                            <div class="div1In"><img src="/images/Cyb/cross.png" alt="cruz de color turquesa" /></div>
                            <div class="div2In"><p>No tienen tiempo para acercarse al lugar para hacer una reserva.
</p></div>
                            <div class="div3In"> <img src="/images/Cyb/tick.png" alt="" /></div>
                            <div class="div4In"><p>Necesitan reservar el salón de manera online de forma rápida y eficaz.
.</p></div>
                        </div>
                    </div>
                    <div class="gridDiv2 margin10">
                        <h3 className='bordeturquesa'>Clientes regulares de bares</h3>
                        <div class="gridInv">
                            <div class="div1In"><img src="/images/Cyb/cross.png" alt="cruz de color turquesa" /></div>
                            <div class="div2In"><p>No quieren comunicarse por aplicaciones de mensajería para reservar una mesa.</p></div>
                            <div class="div3In"> <img src="/images/Cyb/tick.png" alt="" /></div>
                            <div class="div4In"><p>Necesitan reservar una mesa sin necesidad de descargar aplicaciones o comunicarse por otras apps.</p></div>
                        </div>
                    </div>
            </div>
            </div>
        </section>
    )
}
