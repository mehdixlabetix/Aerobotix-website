import FullScreenSection from "./FullScreenSection.jsx";
import {Button, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";


const Eurobot = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth>750){return (
           <FullScreenSection  backgroundColor="#111512" id='eurobot-section' height={["300px","100vh"]}>
            <HStack spacing={[2,8]} width="100%" height="100%" justifyContent="center" alignItems="center">
                <Image width={["67%","50%"]} height="100%" src="/euro.jpg" alt="Eurobot"/>
                <VStack spacing={[2,24]}>
                    <Heading color={"white"} as="h1" size={["lg","xl"]}>Eurobot</Heading>
                   <VStack spacing={8} marginTop={["0%","8%"]} marginBottom={["0%","-7%"]}>
                       <Text color={"white"} w={['80%','100%']} fontSize={[8,16]}>
                        Eurobot: is a European robotics competition that pits teams of students with a passion for robotics
                        against each other. Teams design, build and program autonomous robots to perform specific tasks on a
                        defined playing field. It's an opportunity for participants to apply their knowledge of engineering and
                        computer science while fostering team spirit.
                    </Text>
                       <a  href='https://www.eurobot.org'><Button marginBottom={[,0]} marginLeft={['10%','0%']} width={['85%','100%']} colorScheme="whiteAlpha">View More</Button></a></VStack>
                </VStack>
            </HStack>
        </FullScreenSection>
    )}
    else {
        return (<FullScreenSection  backgroundColor="#111512" id='eurobot-section' height={["720px","100vh"]}>
            <VStack spacing={[2,8]} width="100%" height="100%" justifyContent="center" alignItems="center">
                <Image width={['100%',"50%"]} height="95%" src="/euro.jpg" alt="Eurobot"/>
                <VStack spacing={[2,24]}>
                    <Heading color={"white"} as="h1" size={["xl","xl"]}>Eurobot</Heading>
                    <VStack spacing={8} marginTop={["0%","8%"]} marginBottom={["0%","-7%"]}>
                        <Text color={"white"} w={['80%','100%']} fontSize={[10,16]}>
                            Eurobot: is a European robotics competition that pits teams of students with a passion for robotics
                            against each other. Teams design, build and program autonomous robots to perform specific tasks on a
                            defined playing field. It's an opportunity for participants to apply their knowledge of engineering and
                            computer science while fostering team spirit.
                        </Text>
                        <a  href='https://www.eurobot.org'><Button marginBottom={[5,0]} marginLeft={['10%','0%']} width={['85%','100%']} colorScheme="whiteAlpha">View More</Button></a></VStack>
                </VStack>
            </VStack>
        </FullScreenSection>);

    }
}

export default Eurobot