import FullScreenSection from "./FullScreenSection.jsx";
import {Avatar, Card, Heading, SimpleGrid} from "@chakra-ui/react";
import cld from "./Cloudinary.jsx";

const Team = () => {
    const TeamMembers = [
        {
            name: "Mehdi Cherif",
            role: "President",
            image:cld.image("Team/mehdi").quality("auto").format('auto').toURL(),
        },
        {
            name: "Rawaa Knaissi",
            role: "Administrative Vice President ",
            image:cld.image("Team/rawaa").quality("auto").format('auto').toURL() ,
        }
        ,
        {
            name: "Mohamed Moussi",
            role: "Technical Vice President ",
            image: cld.image("Team/hama").quality("auto").format('auto').toURL(),
        },
        {
            name: "Oussama Darouez",
            role: "Projects Manager",
            image: cld.image("Team/oussama").quality("auto").format('auto').toURL(),
        },
        {
            name: "Mostfa Ghalleb",
            role: "Training Manager",
            image: cld.image("Team/mostfa").quality("auto").format('auto').toURL(),
        },
        {
            name: "Amine BelhajAmor",
            role: "Aeronautics Manager",
            image: cld.image("Team/amine").quality("auto").format('auto').toURL(),
        },
        {
            name: "Maha Grami",
            role: "Logistics Manager",
            image: cld.image("Team/maha").quality("auto").format('auto').toURL(),
        },
        {
            name: 'Nada Abidi',
            role: 'Human Resources Manager',
            image: cld.image("Team/nadaRH").quality("auto").format('auto').toURL(),
        }
        ,
        {
            name: 'Nada Hammami',
            role: 'Sponsoring Manager',
            image: cld.image("Team/nadaSponso").quality("auto").format('auto').toURL(),
        }
        ,
        {
            name: 'Dorra Saadallah',
            role: 'Treasurer',
            image: cld.image("Team/dorra").quality("auto").format('auto').toURL(),
        },
        {
            name: 'Omar Chouchane',
            role: 'Media Manager',
            image: cld.image("Team/omar").quality("auto").format('auto').toURL(),
        }
    ]
    return (
        <FullScreenSection id="team-section" justifyContent="center" alignItems="center">
            <Heading color="var(--title)" as="h1" size="2xl" padding="5% 3% 4% 3%"> Our Team</Heading>
            <Card zIndex={1} style={{transition: 'all 0.5s'}} variant={'unstyled'} minW={["150px", "220px"]}
                  marginBottom="30px"
                  id="team-card">
                <Avatar objectFit="contain" marginBottom="40px" size={["xl", "2xl"]} src={TeamMembers[0].image}
                        alt={TeamMembers[0].name}/>
                <Heading as="h1" fontSize={["lg", "xl"]} marginBottom="20px">{TeamMembers[0].name}</Heading>
                <Heading as="h3" fontSize="sm " fontStyle="italic">{TeamMembers[0].role}</Heading>
            </Card>

            <SimpleGrid width={window.innerWidth - window.innerWidth / 10}
                        minChildWidth={['110px', window.innerWidth / 7]}
                        spacing={["30px", '40px']} marginBottom="40px">
                {TeamMembers.slice(1, TeamMembers.length).map((member) => {
                    return (
                        <Card zIndex={1} style={{transition: 'all 0.5s'}} key={member.name} variant={'unstyled'}
                              id="team-card">
                            <Avatar objectFit="contain" marginBottom="20px" size={["xl", "2xl"]} src={member.image}
                                    alt={member.name}/>
                            <Heading as="h1" fontSize={["md", "xl"]} marginBottom="20px">{member.name}</Heading>
                            <Heading as="h3" fontSize={['11px', "sm "]} fontStyle="italic">{member.role}</Heading>
                        </Card>
                    )
                })
                }
            </SimpleGrid>
        </FullScreenSection>
    )
}
export default Team;