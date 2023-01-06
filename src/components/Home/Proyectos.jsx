import React from 'react'
import DataProy from '../data/proyectos.json'
import {Link} from "react-router-dom";

export function Proyectos() {
        return (
            <section id="proyectos" class="divSec ">
                <h2>Casos de estudio</h2>
                <div id="gridproy">
                    {DataProy.map((proy,index)=>{
                        const img = "./images/" + proy.id + ".png"
                        return(
                            <div key={proy.id} class={proy.clases}>
                                <Link key={proy.boton} to={proy.url}>
                                    <img src={img} alt={proy.alttext} className="hover-2" />
                                    <h3>{proy.titulo}</h3>
                                    <p>{proy.descrp}</p>
                                </Link>
                                
                            </div>
                            )
                        })
                    }
                </div>
            </section>
        )
}
