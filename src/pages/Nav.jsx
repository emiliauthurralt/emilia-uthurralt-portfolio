import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
        return (
            <nav>
                    <Link id="logo" to={"/"}>EMILIA UTHURRALT</Link>
                    <ul id='botonesnav'>
                        <li><Link to="/">Proyectos</Link></li>
                        <li><Link to="/acerca">Acerca</Link></li>
                    </ul>
            </nav>
        )
}

export default Nav