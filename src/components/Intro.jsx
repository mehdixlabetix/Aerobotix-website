import FullScreenSection from "./FullScreenSection.jsx";
import {Heading, Text, VStack} from "@chakra-ui/react";


const Intro = () => {
    return (
        <FullScreenSection id="intro-section" justifyContent="center" alignItems="center">
           < VStack spcaing={10}>
            <Heading fontSize="5xl" color="darkred">A little introduction</Heading>
            <Text id="landing-text" margin="7% 4% 3% 4%"
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
    )
}

export default Intro