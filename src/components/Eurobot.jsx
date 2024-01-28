import FullScreenSection from "./FullScreenSection.jsx";
import {Button, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";


const Eurobot = () => {
    return (
        <FullScreenSection  backgroundColor="white" id='eurobot-section' height={["400px","100vh"]}>
            <HStack spacing={[2,8]} width="100%" height="100%" justifyContent="center" alignItems="center">
                <Image width={["68%","50%"]} height="100%" src="/euro.jpg" alt="Eurobot"/>
                <VStack spacing={[2,24]}>
                    <Heading as="h1" size={["lg","xl"]}>Eurobot</Heading>
                   <VStack spacing={8} marginTop={["0%","8%"]} marginBottom={["0%","-7%"]}>
                       <Text w={['80%','100%']} fontSize={[8,16]}>
                        Eurobot: is a European robotics competition that pits teams of students with a passion for robotics
                        against each other. Teams design, build and program autonomous robots to perform specific tasks on a
                        defined playing field. It's an opportunity for participants to apply their knowledge of engineering and
                        computer science while fostering team spirit.
                    </Text>
                       <a  href='https://www.eurobot.org'><Button marginLeft={['10%','0%']} width={['80%','100%']} colorScheme="blackAlpha">View More</Button></a></VStack>
                    <Image  src="/robot2.jpg" alt="robot" width={["60%","30%"]} height="10%"/>
                </VStack>
            </HStack>
        </FullScreenSection>


    )
}

export default Eurobot