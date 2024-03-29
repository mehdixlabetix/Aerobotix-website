import FullScreenSection from "./FullScreenSection.jsx";
import {Button, Card, CardFooter, Heading, Image, Text, useToast, VStack} from "@chakra-ui/react";
import cld from "./Cloudinary.jsx";

const Events = () => {
    const toast = useToast();
    const robolympixUrl = cld.image("robolympix").quality("auto").format('auto').toURL();
    const aerodayUrl = cld.image("aeroday").quality("auto").format('auto').toURL();
    return (
        <FullScreenSection paddingTop={"10%"} id="events-section" justifyContent="center" alignItems="center">
            <Heading color="var(--title)" as="h1" size="2xl" paddingBottom="5%">Events</Heading>
            <VStack spacing={24}>
                <Card maxH={[550, 550, 250]} direction={{base: 'column', md: 'row'}}
                      overflow='hidden'
                      borderRadius="15px" maxW={["300px", "500px", "1200px"]} backgroundColor="rgb(107, 146, 156)"
                      style={{
                          boxShadow: "7px 7px 10px 0 rgba(107, 146, 156, 0.7)",
                      }}>
                    <Image loading={'lazy'} zIndex={1} borderRadius="15px 0 0 15px" src={robolympixUrl} alt="robolympix"
                           height={["200px", "300px"]}/>
                    <VStack style={{margin: "2% 1% 2% 1%"}}>
                        <Heading marginBottom="5%" as="h2" size="xl">Robolympix</Heading>
                        <Text p={2} fontSize={[12, 14]}>
                            Robolympix, a global robotics competition, ignites passion for the future by challenging all
                            ages with diverse categories
                            like autonomous robots and remote controlled robots. Even kids can join through Robolympix
                            Junior, making it a thrilling platform
                            for anyone to explore the exciting world of robotics.</Text>

                    </VStack>

                    <CardFooter style={{justifyContent: "center", alignItems: "center"}}>
                        <a href="#events-section"><Button onClick={() =>
                            toast({
                                title: 'Website down.',
                                description: "Sorry to inform you that the robolympix website is down, it will be back soon.",
                                status: 'warning',
                                duration: 3000,
                                isClosable: true,
                            })} colorScheme="blackAlpha" variant="solid">View
                            More</Button></a>
                    </CardFooter></Card>
                <Card maxH={[550, 550, 250]} direction={{base: 'column', md: 'row'}}
                      overflow='hidden'
                      borderRadius="15px" maxW={["300px", "500px", "1200px"]} backgroundColor="rgb(107, 146, 156)"
                      style={{
                          boxShadow: "7px 7px 10px 0 rgba(107, 146, 156, 0.7)",
                      }}>
                    <Image loading={'lazy'} zIndex={1} src={aerodayUrl} alt="aeroday" height={["200px", "300px"]}/>
                    <VStack style={{margin: "2% 1% 2% 1%"}}>

                        <Heading marginBottom="2%" as="h2" size="xl">Aeroday</Heading>
                        <Text p={2} fontSize={[12, 14]}>
                            Aeroday, the ultimate aeronautics extravaganza! This multi-faceted competition ignites the
                            skies with
                            diverse challenges across various axes. Witness the awe-inspiring airshow displays, marvel
                            at intricate aeromodels,
                            and witness the future of flight taking shape with cutting-edge Computer-Aided Design
                            showcases. Immerse yourself
                            in educational expositions, engage in insightful aerospace discussions, and even put your
                            skills to the test in thrilling
                            Aerochallenge and AeroEntrepreneur competitions.
                        </Text>
                    </VStack>

                    <CardFooter style={{justifyContent: "center", alignItems: "center"}}>
                        <a href="https://aeroday.tn"><Button colorScheme="blackAlpha" variant="solid">View More</Button></a>
                    </CardFooter></Card>
            </VStack>
        </FullScreenSection>
    );
}

export default Events;