import FullScreenSection from "./FullScreenSection.jsx";
import {Heading, Image, VStack} from "@chakra-ui/react";
import cld from "./Cloudinary.jsx";

const LandingPage = () => {
    const vidUrl = cld.video("auo8mygp5zv90rextntz").quality("auto").format('auto').toURL();
    const logoUrl = cld.image("logo_aerobotix").quality("auto").format('auto').toURL();
    const width = window.innerWidth;
    return (

        <FullScreenSection zIndex={1} id="landing-section" justifyContent="center" alignItems="center">
            {width > 760 &&
                <video
                    preload={"auto"}
                    rel={"preload"}
                    style={{
                        position: "absolute",
                        width: "100%",
                        left: "50%",
                        top: "6.5%",
                        height: "100vh",
                        objectFit: "cover",
                        transform: "translate(-50%, -50%)",

                    }} autoPlay muted loop id="myVideo">
                    <source rel={'preload'} src={vidUrl} type="video/mp4"/>
                </video>}
            {width < 760 && <video
                preload={"auto"}
                rel={"preload"}
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "2.5%",
                    height: "100%",
                    objectFit: "contain",
                    transform: "translate(-50%, -50%)",
                }} autoPlay muted loop id="myVideo">
                <source src={vidUrl} type="video/mp4"/>
            </video>}
            <VStack height={["200px", "100vh"]} justifyContent="center" alignItems='center' spcaing={24} zIndex={2}>
                <Image loading={'eager'}  rel={'preload'} marginTop={["30%", "0%"]} src={logoUrl} alt="Aerobotix" width={["150px", "650px"]}
                       height={["50px", "180px"]}/>
                <Heading fontSize={["l", "5xl"]} color="white" fontFamily={'Mr Dafoe'}>Learn Create Innovate</Heading>
            </VStack>

        </FullScreenSection>
    );
}

export default LandingPage;