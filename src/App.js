import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Cyberland from './pages/Cyberland.jsx'
import Acerca from './pages/Acerca.jsx'
import stylesheet from './css/app.css'
import AlDi from './pages/AlDi.jsx'
import Derechos from './pages/Derechos.jsx'
import Celeste from './pages/Celeste.jsx'

<style>{stylesheet}</style>
export function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="cyberland" element={<Cyberland/>} />
            <Route path="acerca" element={<Acerca/>} />
            <Route path="aldi" element={<AlDi/>} />
            <Route path='derechos' element={<Derechos/>}/>
            <Route path='celeste' element={<Celeste/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}