import React from 'react'

export default function Contexto() {
  return (
    <section className="flexbox">
        <div className="secCyb margin10">
            <h2>01 | Contexto</h2>
            <p className="parrafo2 margin10">Durante el 2021 tuve la oportunidad de dar clases de alfabetización digital a un grupo de mujeres mayores que tenían interés en aprender sobre tecnología.</p>
            <div class="gridContexto margin20">
                <div class="gifCelular1">
                    <img src="images/Aldi/gifs/celul.gif" alt="soy un div" className="imgBordeRosa gifWidth" />
                </div>
                <div class="explicacionAD">
                    <p><span className="bold">Alfabetismo digital</span> <br/>
                    Capacidad para localizar, organizar, entender, evaluar y analizar información utilizando tecnología digital.</p>
                </div>
            </div>
            <p className="parrafo2 margin10">Les enseñé a utilizar sus dispositivos electrónicos, pero me encontré con la falta de recursos para que puedan aprender por sus propios medios.</p>
            <h3 className='parrafo1 margin20'>
                Pain point</h3>
            <div className='flexbox margin10'>
                <div class="painPointGrid flexbox">
                    <div class="smileAlDi">
                        <img src="images/Aldi/_).png" alt="Cara feliz de color verde" />
                    </div>
                    <div class="sadAlDi">
                        <img src="images/Aldi/_(.png" alt="Cara triste de color rojo"/> </div>
                    <div class="textoSmile">
                        <p className="parrafo2">Se sentían confiadas cuando alguien acompañaba sus pasos a la hora de realizar una acción en sus celulares, tablets o computadoras.</p>
                    </div>
                    <div class="textoSad">
                        <p className="parrafo2">Pero al repetir esas acciones solas comenzaban a tener angustia por no sentirse seguras de sí mismas y no podían lograr su objetivo.</p>
                    </div>
                    <div className="contextoDivConocimiento">
                    <p className="parrafo1 textCenter ">
                    Tener un conocimiento básico de los símbolos presentes en sus dispositivos les hace entender mejor el entorno y sentir más seguridad utilizándolos.<br/>
                    <img src="images/Aldi/gifs/compu.gif" alt="" className='imgBordeRosa gifWidth margin10' />
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}
