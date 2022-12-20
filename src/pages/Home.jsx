/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import mojs from '@mojs/core'
import { Header } from '../components/Home/Header'
import { Proyectos } from '../components/Home/Proyectos'
import stylesheet from '../css/home.css'
import LinkConfetti from './Animacion'

<style>
    {stylesheet}
</style>

function Home(){
    return(
    <>
        <Header/>
        <Proyectos/>
        <LinkConfetti/>
    </>
    )
}

export default Home

