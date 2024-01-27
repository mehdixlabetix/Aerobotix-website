import {useEffect} from 'react'

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

function App() {
    useEffect(() => {

        VantaNet({
            el: "#main",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: "#ff0000",
            backgroundColor: "#111512",
            points: 7.00,
            maxDistance: 16.00,
            spacing: 18.00
        })

    }, [])
    return (
        <ChakraProvider>
            <Header/>
            <LandingPage/>
            <main id="main">
                <Intro/>
                <Axis/>
                <ImageSlider/>
                <Team/>
            </main>

            <Footer/>
        </ChakraProvider>
    )
}

export default App
