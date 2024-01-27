import FullScreenSection from "./FullScreenSection.jsx";
import {Heading, Image, Text, VStack} from "@chakra-ui/react";

const LandingPage = () => {
    return (

        <FullScreenSection  justifyContent="center" alignItems="center">
            <VStack spcaing={24}>
                <Image src="/src/assets/logo_aerobotix.png" alt="Aerobotix" width="500px" height="180px"/>
                <Heading fontSize="5xl" color="#7D8491">Learn Create Innovate</Heading>
                <Text id="landing-text" margin="2% 4% 3% 4%"
                      style={{fontFamily: 'cursive', whiteSpace: 'pre-wrap', color: "white"}} fontSize="xl">
                    The AeRobotiX club is a non-profit science club.
                    It is the result of the merger of the Mechatronics and Embedded Orders clubs of INSAT.
                    AeRobotiX operates in the realization of robotic and automated applications having utility in vital
                    areas such as industry, home automation, aeronautics, automotive and security.
                    In addition, AeRobotiX has a glorious history of its regular participation in national and
                    international competitions, particularly in the field of robotics.
                    AeRobotiX offers its members excellent technical training, accompanied by exceptional managerial
                    experience.
                    Through the various club activities, the member strengthens his academic training at INSAT through
                    real confrontations with members of his team and professionals working with our club.
                    The club also offers its members the opportunity to participate in national and international
                    competitions, which allows them to acquire a lot of experience and skills.
                </Text>
            </VStack>

        </FullScreenSection>
    );
}

export default LandingPage;