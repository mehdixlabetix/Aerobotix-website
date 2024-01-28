import FullScreenSection from "./FullScreenSection.jsx";
import {Heading, Image, VStack} from "@chakra-ui/react";

const LandingPage = () => {
    const width = window.innerWidth;
    return (

        <FullScreenSection id="landing-section" justifyContent="center" alignItems="center">
            {width>760 &&    <video style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top:"8%",
                height: "100%",
                objectFit: "contain",
                transform: "translate(-50%, -50%)",
            }} autoPlay muted loop id="myVideo">
                <source src="vid.mp4" type="video/mp4"/>
            </video>}
            {width < 760 && <video style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "3%",
                height: "100%",
                objectFit: "contain",
                transform: "translate(-50%, -50%)",
            }} autoPlay muted loop id="myVideo">
                <source src="vid.mp4" type="video/mp4"/>
            </video>}
            <VStack height={["200px", "100vh"]} justifyContent="center" alignItems='center' spcaing={24} zIndex={2}>
                <Image marginTop={["30%","0%"]} src="/logo_aerobotix.png" alt="Aerobotix" width={["150px", "500px"]} height={["50px","180px"]}/>
                <Heading fontSize={["l", "5xl"]} color="#7D8491">Learn Create Innovate</Heading>
            </VStack>

        </FullScreenSection>
    );
}

export default LandingPage;