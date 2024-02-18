import {Card, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection.jsx";
import cld from "./Cloudinary.jsx";

const Axis = () => {
    const roboticsUrl = cld.image("robotics").quality("auto").format('auto').toURL();
    const aeronauticsUrl = cld.image("aeronautics").quality("auto").format('auto').toURL();
    return (

        <FullScreenSection id="axis-section" width="100%" justifyContent="center" alignItems="center">
            <Heading color="var(--title)" as="h1" size={["xl", "4xl"]} padding="7% 3% 6% 3%"> Our Axis</Heading>
            <HStack spacing={[6, 58]} align="center">
                <Card zIndex={1} variant={'unstyled'} marginLeft={["8%", "10%"]} id="axis_cards">
                    <VStack spacing="24px" align="center">
                        <Image marginTop="3%" borderRadius="10px" src={roboticsUrl} alt="robotics"
                               width={["100%", "70%"]} height={["100px", "200px"]}
                               style={{filter: 'drop-shadow(7px 7px 7px rgba(0, 0, 0, 0.75))'}}/>
                        <Heading as="h1" size="xl" padding="2% 3% 0% 3%">Robotics</Heading>
                        <Text textAlign={["left", 'justify']} padding="2% 3% 3% 3%" fontSize={["s", "xl"]}
                              w={["100%", '78%']}>
                            Robotics is an interdisciplinary branch of engineering and
                            science
                            that
                            includes mechanical engineering, electronic engineering, information engineering, computer
                            science,
                            and
                            others. Robotics deals with the design, construction, operation, and use of robots, as well
                            as
                            computer
                            systems for their control, sensory feedback, and information processing.
                        </Text>
                    </VStack>
                </Card>
                <Card zIndex={1} variant={'unstyled'} marginRight={["8%", "10%"]} id="axis_cards"><VStack spacing="24px"
                                                                                                          align="center">
                    <Image marginTop="3%" filter="brightness(1.8)" borderRadius="10px" src={aeronauticsUrl}
                           alt="aeronautics" width={["100%", "70%"]} height={["100px", "200px"]}
                           style={{filter: 'drop-shadow(7px 7px 7px rgba(0, 0, 0, 0.75))'}}/>
                    <Heading as="h1" size="xl" padding="2% 3% 0% 3%">Aeronautics</Heading>
                    <Text textAlign={["left", 'justify']} padding="2% 3% 3% 3%" fontSize={["s", "xl"]}
                          w={["100%", '78%']}>
                        Aeronautics is the science or art involved with the study,
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