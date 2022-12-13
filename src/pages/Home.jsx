import React from 'react'
import { Header } from '../components/Home/Header'
import { Proyectos } from '../components/Home/Proyectos'
import stylesheet from '../css/home.css'
<style>
    {stylesheet}
</style>
function Home(){
    return(
    <>
        <Header/>
        <Proyectos/>    
    </>
    )
}

export default Home