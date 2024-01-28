import FullScreenSection from "./FullScreenSection.jsx";
import {Heading, Image, VStack} from "@chakra-ui/react";

const LandingPage = () => {
    return (

        <FullScreenSection justifyContent="center" alignItems="center">
            <video style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "8%",
                height: "100%",
                objectFit: "contain",
                transform: "translate(-50%, -50%)",
            }} autoPlay muted loop id="myVideo">
                <source src="vid.mp4" type="video/mp4"/>
            </video>
            <VStack spcaing={24} zIndex={2}>
                <Image src="/logo_aerobotix.png" alt="Aerobotix" width="500px" height="180px"/>
                <Heading fontSize="5xl" color="#7D8491">Learn Create Innovate</Heading>
            </VStack>

        </FullScreenSection>
    );
}

export default LandingPage;