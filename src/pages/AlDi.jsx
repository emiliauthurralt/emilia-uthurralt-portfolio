import React from 'react'
import Header from '../components/AlDi/Header'
import IntroAlDi from '../components/AlDi/Intro'
import stylesheet from '../css/aldi.css'
import Contexto from '../components/AlDi/Contexto'
import WebsiteSeniorFriendly from '../components/AlDi/WebsiteSeniorFriendly'
import Ideate from '../components/AlDi/Ideate'

<style>{stylesheet}</style>
export default function AlDi() {
return (
    <>
        <Header/>
        <IntroAlDi />
        <Contexto/>
        <WebsiteSeniorFriendly/>
        <Ideate/>
    </>
)
}
