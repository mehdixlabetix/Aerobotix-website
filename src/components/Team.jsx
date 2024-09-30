import FullScreenSection from "./FullScreenSection.jsx";
import { Avatar, Card, Heading, SimpleGrid } from "@chakra-ui/react";
import cld from "./newCloudinary.jsx";

const Team = () => {
  const TeamMembers = [
    {
        name: "Lina Hamad",
        role: "Administrative Vice President",
        image: cld.image("v1727725119/2_bar5hy.png").quality("auto").format('auto').toURL(),
      },
    {
      name: "Sami Bahlous",
      role: "President",
      image: cld.image("v1727725118/1_e3rxs1.png").quality("auto").format('auto').toURL(),
    },
    
    {
      name: "Fayez Zouari",
      role: "Technical Vice President",
      image: cld.image("v1727725118/3_kukvc5.png").quality("auto").format('auto').toURL(),
    },
    {
        name: "Rayen Bouafif",
        role: "Training Manager",
        image: cld.image("v1727725122/6_nz8gyv.png").quality("auto").format('auto').toURL(),
    },
    {
        name: "Marwen Dhifi",
        role: "Training Manager",
        image: cld.image("v1727725127/9_mmmhkn.png").quality("auto").format('auto').toURL(),
    },
    {
    name: "Abdelkarim Salah",
    role: "Training Manager",
    image: cld.image("v1727725119/7_ev17do.png").quality("auto").format('auto').toURL(),
    },
    {
      name: "Mohamed Zouaghi",
      role: "Projects Manager",
      image: cld.image("v1727725125/8_yv1ywd.png").quality("auto").format('auto').toURL(),
    },
    
    {
      name: "Amine BelhajAmor",
      role: "Aeronautics Manager",
      image: cld.image("v1727725126/14_n72byw.png").quality("auto").format('auto').toURL(),
    },
    {
      name: "Med Hedi Zadem",
      role: "Logistics Manager",
      image: cld.image("v1727725127/13_itirom.png").quality("auto").format('auto').toURL(),
    },
    {
      name: "Zeyneb Ben Abdallah",
      role: "Human Resources Manager",
      image: cld.image("v1727725125/4_mq804n.png").quality("auto").format('auto').toURL(),
    },
    {
        name: "Aicha Guidara",
        role: "Media Manager",
        image: cld.image("v1727725122/5_adnfq6.png").quality("auto").format('auto').toURL(),
      },
    {
      name: "Meriem Slim",
      role: "Sponsoring Manager",
      image: cld.image("v1727725120/10_m3ykf5.png").quality("auto").format('auto').toURL(),
    },
    {
      name: "Nour Halouani",
      role: "Treasurer",
      image: cld.image("v1727725123/12_nuekiw.png").quality("auto").format('auto').toURL(),
    },
  
    {
      name: "Maryem Besbes",
      role: "External Relations Manager",
      image: cld.image("v1727725122/11_lvhgyl.png").quality("auto").format('auto').toURL(),
    },
    
    
  ];

  return (
    <FullScreenSection id="team-section" justifyContent="center" alignItems="center">
      <Heading color="var(--title)" as="h1" size="2xl" padding="5% 3% 4% 3%">
        Our Team
      </Heading>

      {/* Wrap the first 3 team members in a grid */}
      <SimpleGrid
        columns={[3, 4, 4, 3]} // Responsive layout: 3 columns on small screens, 4 on medium/large, and 3 on extra-large
        spacing="40px"
        justifyContent="center"
        alignItems="center"
        marginBottom="30px"
      >
        {TeamMembers.slice(0, 3).map((member) => (
          <Card
            key={member.name}
            zIndex={1}
            style={{ transition: "all 0.5s" }}
            variant={"unstyled"}
            minW={["150px", "220px"]}
            id="team-card"
            textAlign="center"
          >
            <Avatar
              loading={"lazy"}
              objectFit="contain"
              marginBottom="40px"
              size={["xl", "2xl"]}
              src={member.image}
              name={member.name}
            />
            <Heading as="h1" fontSize={["lg", "xl"]} marginBottom="20px">
              {member.name}
            </Heading>
            <Heading as="h3" fontSize="sm" fontStyle="italic">
              {member.role}
            </Heading>
          </Card>
        ))}
      </SimpleGrid>

      {/* Wrap the remaining team members in a grid */}
      <SimpleGrid
        columns={[3, 4, 4]} // Same layout pattern for the remaining team members
        spacing="40px"
        justifyContent="center"
        alignItems="center"
        marginBottom="40px"
      >
        {TeamMembers.slice(3, 11).map((member) => (
          <Card
            key={member.name}
            zIndex={1}
            style={{ transition: "all 0.5s" }}
            variant={"unstyled"}
            id="team-card"
            textAlign="center"
          >
            <Avatar
              loading={"lazy"}
              objectFit="contain"
              marginBottom="20px"
              size={["xl", "2xl"]}
              src={member.image}
              name={member.name}
            />
            <Heading as="h1" fontSize={["md", "xl"]} marginBottom="20px">
              {member.name}
            </Heading>
            <Heading as="h3" fontSize={["11px", "sm"]} fontStyle="italic">
              {member.role}
            </Heading>
          </Card>
        ))}
      </SimpleGrid>
      {/* Wrap the first 3 team members in a grid */}
      <SimpleGrid
        columns={[3]} // Responsive layout: 3 columns on small screens, 4 on medium/large, and 3 on extra-large
        spacing="40px"
        justifyContent="center"
        alignItems="center"
        marginBottom="30px"
      >
        {TeamMembers.slice(11).map((member) => (
          <Card
            key={member.name}
            zIndex={1}
            style={{ transition: "all 0.5s" }}
            variant={"unstyled"}
            minW={["150px", "220px"]}
            id="team-card"
            textAlign="center"
          >
            <Avatar
              loading={"lazy"}
              objectFit="contain"
              marginBottom="40px"
              size={["xl", "2xl"]}
              src={member.image}
              name={member.name}
            />
            <Heading as="h1" fontSize={["lg", "xl"]} marginBottom="20px">
              {member.name}
            </Heading>
            <Heading as="h3" fontSize="sm" fontStyle="italic">
              {member.role}
            </Heading>
          </Card>
        ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default Team;
