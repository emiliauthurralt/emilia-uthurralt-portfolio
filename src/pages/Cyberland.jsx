import React from "react";
import IntroCyb from "../components/Cyberland/IntroCyb";
import InvCyb from "../components/Cyberland/InvCyb";
import ObjCyb from "../components/Cyberland/ObjCyb";
import PerCyb from "../components/Cyberland/PerCyb";
import SketchCyb from "../components/Cyberland/SketchCyb";
import ProtBF from "../components/Cyberland/ProtBF";
import stylesheet from '../css/cyberland.css'
import ProtAF from "../components/Cyberland/ProtAF";
import PantCyb from "../components/Cyberland/PantCyb";
import FeatCyb from "../components/Cyberland/FeatCyb";
import ConCyb from "../components/Cyberland/ConCyb";
<style>{stylesheet}</style>
export default function Cyberland(){
    return(
        <>
            <header class="headerCaso imgCybHeader">
                <h1>Caso de estudio: Cyberland</h1>
                <img src="./images/cyberland1.png" alt="" />
                <h2>Web-app de reservas</h2>
            </header>
            <IntroCyb/>
            <InvCyb/>
            <ObjCyb/>
            <PerCyb/>
            <SketchCyb/>
            <ProtBF/>
            <ProtAF/>
            <PantCyb/>
            <FeatCyb/>
            <ConCyb/>
        </>
    )
}