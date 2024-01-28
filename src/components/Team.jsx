import FullScreenSection from "./FullScreenSection.jsx";
import {Avatar, Card, Heading, SimpleGrid} from "@chakra-ui/react";

const Team = () => {
    const TeamMembers= [
        {
        name: "Mehdi Cherif",
        role: "President",
        image: "/comité/mehdi2.jpg",
        },
        {
            name: "Rawaa Knaissi",
            role: "Administrative Vice President ",
            image: "/comité/rawaa.jpg",
        }
        ,
        {
            name: "Mohamed Moussi",
            role: "Technical Vice President ",
            image: "/comité/hamma.jpg",
        },
        {
            name: "Oussama Darouez",
            role:"Projects Manager",
            image:"/comité/oussama.jpg",
        },
        {name:"Mostfa Ghalleb",
        role:"Training Manager",
        image:"/comité/mostfa.jpg",},
        {
            name: "Amine BelhajAmor",
            role: "Aeronautics Manager",
            image: "/comité/amine.jpg",
        },
        {
            name: "Maha Grami",
            role: "Logistics Manager",
            image: "/comité/maha.jpg",
        },
        {
            name: 'Nada Abidi' ,
            role: 'Human Resources Manager',
            image: '/comité/nadaRH.jpg',
        }
        ,
        {
            name:'Nada Hammami',
            role:'Sponsoring Manager',
            image:'/comité/nadaSP.jpg',
        }
        ,
        {
            name:'Dorra Saadallah',
            role:'Treasurer',
            image:'/comité/dorra.jpg',
        },
        {
            name: 'Omar Chouchane',
            role:'Media Manager',
            image:'/comité/omar.jpg',
        }
    ]
    return (
        <FullScreenSection id="team-section"  justifyContent="center" alignItems="center">
            <Heading color="var(--title)" as="h1" size="2xl" padding="5% 3% 4% 3%"> Our Team</Heading>
            <Card  minW={["150px","220px"]} marginBottom="40px"
                 id="team-card">
                <Avatar objectFit="contain" marginBottom="40px" size="2xl" src={TeamMembers[0].image} alt={TeamMembers[0].name}/>
                <Heading as="h1" fontSize="md" marginBottom="20px">{TeamMembers[0].name}</Heading>
                <Heading as="h2" fontSize="sm ">{TeamMembers[0].role}</Heading>
            </Card>

            <SimpleGrid width ={window.innerWidth-window.innerWidth/10} minChildWidth={['110px','220px']} spacing={["20px",'40px']} marginBottom="40px">
                {  TeamMembers.slice(1,TeamMembers.length).map((member)=>{
                        return (
                            <Card  key={member.name}
                            id="team-card">
                                <Avatar objectFit="contain" marginBottom="40px" size="2xl" src={member.image} alt={member.name}/>
                                <Heading as="h1" fontSize="md" marginBottom="20px">{member.name}</Heading>
                                <Heading as="h2" fontSize="sm ">{member.role}</Heading>
                            </Card>
                        )
                    })
                }
            </SimpleGrid>
        </FullScreenSection>
    )
}
export default Team;