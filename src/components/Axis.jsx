import {Card, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection.jsx";

const Axis = () => {

    return (

        <FullScreenSection justifyContent="center" alignItems="center">
            <Heading color="wheat" as="h1" size="4xl" padding="3% 3% 10% 3%"> Our Axis</Heading>
            <HStack spacing={80} align="center" >
               <Card id="axis_cards" maxW="400px" >
                   <VStack spacing="24px" align="center">
                           <Heading  as="h1" size="xl" padding="3% 3% 3% 3%">Robotics</Heading>
                           <Image src="/src/assets/robotics2.jpg" alt="robotics" width="100%" height="200px"  />
                            <Text padding="2% 3% 3% 3%"  fontSize="l" color="white">Robotics is an interdisciplinary branch of engineering and
                                science
                                that
                                includes mechanical engineering, electronic engineering, information engineering, computer
                                science,
                                and
                                others. Robotics deals with the design, construction, operation, and use of robots, as well as
                                computer
                                systems for their control, sensory feedback, and information processing.
                            </Text>
                   </VStack>
               </Card>
                <Card id="axis_cards" maxW="400px" ><VStack spacing="24px" align="center">
                    <Heading  as="h1" size="xl" padding="3% 3% 3% 3%">Aeronautics</Heading>
                    <Image src="/src/assets/aeronautics.jpg" alt="robotics" width="100%" height="200px" />
                    <Text fontSize="l" color="white" padding="1% 3% 3% 3%">Aeronautics is the science or art involved with the study,
                        design, and
                        manufacturing of air flight capable machines, and the techniques of operating aircraft and
                        rockets
                        within the atmosphere. The British Royal Aeronautical Society identifies the aspects of
                        aeronautical Art, Science and Engineering and the profession of Aeronautics .
                    </Text>
                </VStack></Card>

            </HStack>
        </FullScreenSection>
    )
}
export default Axis;