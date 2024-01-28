import FullScreenSection from "./FullScreenSection.jsx";
import {Card, HStack, Image, Text, VStack, Heading, CardFooter, Button, Divider} from "@chakra-ui/react";

const Events = () => {
    return (
        <FullScreenSection id="events-section" justifyContent="center" alignItems="center">
            <Heading color="darkred" as="h1" size="2xl" paddingBottom="5%" >Events</Heading>
            <VStack spacing={24}>
                <Card maxH={250} direction={{ base: 'column', sm: 'row' }}
                      overflow='hidden'
                      borderRadius="15px" maxW="1200px" backgroundColor="#57737A"><HStack>
                    <Image borderRadius="15px 0 0 15px" src="/robolympix2.jpg" alt="robolympix" height="300px"/>

                    <VStack style={{margin:"2% 1% 2% 1%"}}>
                        <Heading marginBottom="5%" as="h2" size="xl">Robolympix</Heading>
                        <Text fontSize={14}>
                            Robolympix, a global robotics competition, ignites passion for the future by challenging all
                            ages with diverse categories
                            like autonomous robots and remote controlled robots. Even kids can join through Robolympix
                            Junior, making it a thrilling platform
                            for anyone to explore the exciting world of robotics.</Text>
                    </VStack>
                    <Divider  orientation="vertical" />

                </HStack>
                    <CardFooter style={{justifyContent: "center", alignItems: "center"}}>

                        <a href="https://robolympix.tn"><Button colorScheme="whiteAlpha" variant="solid">View More</Button></a>
                    </CardFooter></Card>
                <Card direction={{base: 'column', sm: 'row'}}
                      overflow='hidden'
                      borderRadius="15px" maxW="1200px" maxH="250px" backgroundColor="#57737A">
                  <HStack>
                      <Image src="/aeroday.jpg" alt="aeroday"  height="300px" />
                    <VStack style={{margin:"2% 1% 2% 1%"}}>

                        <Heading marginBottom="2%" as="h2" size="xl" >Aeroday</Heading>
                        <Text fontSize={14}>
                            Aeroday, the ultimate aeronautics extravaganza! This multi-faceted competition ignites the skies with
                            diverse challenges across various axes. Witness the awe-inspiring airshow displays, marvel at intricate aeromodels,
                            and witness the future of flight taking shape with cutting-edge Computer-Aided Design showcases. Immerse yourself
                            in educational expositions, engage in insightful aerospace discussions, and even put your skills to the test in thrilling
                            Aerochallenge and AeroEntrepreneur competitions.
                        </Text>
                        </VStack>
                      <Divider  orientation="vertical" />

                  </HStack>
                <CardFooter style={{justifyContent:"center",alignItems:"center"}}>
                    <a href="https://aeroday.tn"><Button colorScheme="whiteAlpha" variant="solid">View More</Button></a>
                </CardFooter></Card>
            </VStack>
        </FullScreenSection>
    );
}

export default Events;