import {lazy, Suspense, useEffect} from 'react'
import { Analytics } from '@vercel/analytics/react';
import './App.css'
import {ChakraProvider} from "@chakra-ui/react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import VantaNet from "vanta/src/vanta.net.js";
import LandingPage from "./components/LandingPage.jsx";
import Axis from "./components/Axis.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import Team from "./components/Team.jsx";
import Intro from "./components/Intro.jsx";
import Events from "./components/Events.jsx";
import Eurobot from "./components/Eurobot.jsx";
import VantaHalo from "vanta/src/vanta.halo.js";
import VantaClouds from "vanta/src/vanta.clouds.js";
import VantaClouds2 from "vanta/src/vanta.clouds2.js";
import Particles from "./components/particles.jsx";

function App() {
    /*useEffect(() => {

       setTimeout(()=> {VantaClouds2({
            el: "#main",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 0.90,
            scaleMobile: 1.00,
            color: "#bb263c",
            backgroundColor: "#ffffff",
            points: 7.00,
            maxDistance: 16.00,
            spacing: 18.00
        })

    },50)}, [])*/

    return (
        <>
        <ChakraProvider>
            <Header/>
            <LandingPage/>
            <main id="main">
                <Intro/>
                <Axis/>
                <ImageSlider/>

                <Eurobot/>

                <Events/>
                <Team/>
                <Particles/>
            </main>

            <Footer/>
        </ChakraProvider>
            <Analytics />
        </>
    )
}

export default App
