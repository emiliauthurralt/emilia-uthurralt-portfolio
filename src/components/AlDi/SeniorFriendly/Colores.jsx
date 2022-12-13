import React from 'react'

export default function Colores() {
return (
        <div className="secDiv">
            <h3 className='parrafo1 margin20'>02.1 | Colores</h3>
            <div class="coloresGridAldi flexbox">
                <div class="xDiv">
                <img src="images/Aldi/Vector.png" alt="" />
                </div>
                <div class="tickDiv">
                <img src="images/Aldi/Vector-1.png" alt="" />
                </div>
                <div class="xDiv2 parrafo3">
                    <p>
                    Colores brillantes, vibrantes y fluorescentes.<br/>
                    Amarillo, azul y verde.
                    </p>
                </div>
                <div class="tickDiv2 parrafo3">
                    <p>Combinaciones de colores de alto ratio de contraste.<br/>
                    Combinaciones de colores que no sean discordantes</p>
                </div>
                <div class="explicacionVision parrafo3 imgBordeRosa flexbox">
                <p className='textCenter'>La visión sufre cambios con el envejecimiento haciendo que leer una pantalla sea difícil ya que los ojos detectan cada vez menos la luz, el color y los detalles.</p>
                </div>
            </div>
            <p className="parrafo1 margin20">Mi elección de colores:</p>
            <img src="./images/Aldi/colores.png" alt="" className='center margin10' />
        </div>
    )
}