import {lazy, Suspense} from 'react'
import {Analytics} from '@vercel/analytics/react';
import './App.css'
import {ChakraProvider} from "@chakra-ui/react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Intro from "./components/Intro.jsx";
import Particles from "./components/particles.jsx";
import Axis from "./components/Axis.jsx";
import ImageSlider from "./components/ImageSlider.jsx";

function App() {
    const LazyEurobot = lazy(() => import('./components/Eurobot.jsx'))
    const LazyTeam = lazy(() => import('./components/Team.jsx'))
    const LazyEvents = lazy(() => import('./components/Events.jsx'))
    return (
        <>
            <ChakraProvider>
                <Header/>
                <LandingPage/>
                <Intro/>
                <Axis/>
                <ImageSlider/>
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyEurobot/>
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyEvents/>
                    <LazyTeam/>
                </Suspense>
                <Particles/>
                <Footer/>
            </ChakraProvider>
            <Analytics/>
        </>
    )
}

export default App
