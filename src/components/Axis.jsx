import {Card, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection.jsx";

const Axis = () => {

    return (

        <FullScreenSection style={{backgroundColor:"#111512"}} width="100%" justifyContent="center" alignItems="center">
            <Heading color="darkred" as="h1" size="4xl" padding="3% 3% 6% 3%"> Our Axis</Heading>
            <HStack spacing={58} align="center" >
               <Card marginLeft="10%"  id="axis_cards"  >
                   <VStack spacing="24px" align="center">
                           <Image borderRadius="10px" src="/robotics2.jpg" alt="robotics" width="70%" height="200px"  />
                           <Heading  as="h1" size="xl" padding="2% 3% 0% 3%">Robotics</Heading>
                           <Text textAlign="center" padding="2% 3% 3% 3%"  fontSize="l" >Robotics is an interdisciplinary branch of engineering and
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
                <Card marginRight="10%" id="axis_cards"  ><VStack spacing="24px" align="center">
                    <Image borderRadius="10px" src="/aeronautics.jpg" alt="robotics" width="70%" height="200px" />
                    <Heading  as="h1" size="xl" padding="2% 3% 0% 3%">Aeronautics</Heading>
                    <Text textAlign="center" fontSize="l" justifyContent="center" padding="1% 3% 3% 3%">Aeronautics is the science or art involved with the study,
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