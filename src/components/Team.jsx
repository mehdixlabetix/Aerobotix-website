import FullScreenSection from "./FullScreenSection.jsx";
import {Avatar, Card, Heading, SimpleGrid} from "@chakra-ui/react";

const Team = () => {
    const TeamMembers= [
        {
        name: "Mehdi Cherif",
        role: "Presidet",
        image: "/src/assets/comité/mehdi2.jpg",
        },
        {
            name: "Rawaa Knaissi",
            role: "Administrative Vice President ",
            image: "/src/assets/comité/rawaa.jpg",
        }
        ,
        {
            name: "Mohamed Moussi",
            role: "Technical Vice President ",
            image: "/src/assets/comité/hamma.jpg",
        },
        {
            name: "Oussama Darouez",
            role:"Projects Manager",
            image:"/src/assets/comité/oussama.jpg",
        },
        {name:"Mostfa Ghalleb",
        role:"Training Manager",
        image:"/src/assets/comité/mostfa.jpg",},
        {
            name: "Amine BelhajAmor",
            role: "Aeronautics Manager",
            image: "/src/assets/comité/amine.jpg",
        },
        {
            name: "Maha Grami",
            role: "Logistics Manager",
            image: "/src/assets/comité/maha.jpg",
        },
        {
            name: 'Nada Abidi' ,
            role: 'Human Resources Manager',
            image: '/src/assets/comité/nadaRH.jpg',
        }
        ,
        {
            name:'Nada Hammami',
            role:'Sponsoring Manager',
            image:'/src/assets/comité/nadaSP.jpg',
        }
        ,
        {
            name:'Dorra Saadallah',
            role:'Treasurer',
            image:'/src/assets/comité/dorra.jpg',
        },
        {
            name: 'Omar Chouchane',
            role:'Media Manager',
            image:'/src/assets/comité/omar.jpg',
        }
    ]
    return (
        <FullScreenSection justifyContent="center" alignItems="center">
            <Heading color="wheat" as="h1" size="2xl" padding="3% 3% 10% 3%"> Our Team</Heading>
            <Card  minW="220px" marginBottom="40px"
                 id="team-card">
                <Avatar objectFit="contain" marginBottom="40px" size="2xl" src={TeamMembers[0].image} alt={TeamMembers[0].name}/>
                <Heading as="h1" fontSize="md" marginBottom="20px">{TeamMembers[0].name}</Heading>
                <Heading as="h2" fontSize="sm ">{TeamMembers[0].role}</Heading>
            </Card>

            <SimpleGrid width="1300px" minChildWidth='220px' spacing='40px' marginBottom="40px">
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