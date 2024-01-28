import  {useEffect, useRef} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {Box, HStack} from '@chakra-ui/react'

const socials = [
    {
        name: 'Facebook',
        icon: faFacebook,
        url: 'https://www.facebook.com/AeRobotiX.INSAT',
    },
    {
        name: 'Mail',
        icon: faEnvelope,
        url: 'mailto:aerobotix@insat.ucar.tn',
    },
    {name: 'Github', icon: faGithub, url: 'https://github.com/Aerobotix-INSAT'},
    {
        name: 'Linkedin',
        icon: faLinkedin,
        url: 'https://www.linkedin.com/company/aerobotix-insat/',
    },
]

const Header = () => {
    let translation = useRef(null)
    let prevScrollY = 0
    const handleScroll = () => {
        const scrollY = window.scrollY
        let scrolling = scrollY - prevScrollY <= 0 ? 0 : -200
        translation.current.style.transform = 'translateY(' + scrolling + 'px)'
        prevScrollY = scrollY
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [translation])


    return (
        <Box
            id="header"
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".1s"
            transitionTimingFunction="ease"
            backgroundColor="#18181b"
            ref={translation}
            zIndex={5}
        >
            <Box color="white" maxWidth={["400px", "1280px"]} margin={["0 0","0 auto"]}>
                <HStack
                    px={[4,16]}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <nav id="header-socials">
                        <HStack spacing={[2,8]}>
                            {socials.map((social) => {
                                return (
                                    <a
                                        aria-label={
                                            'Reachout using' + social.name
                                        }
                                        key={social.name}
                                        href={social.url}
                                    >
                                        <FontAwesomeIcon
                                            icon={social.icon}
                                            size= "2x"
                                        />
                                    </a>
                                )
                            })}
                        </HStack>
                    </nav>
                    <nav id="header-links">
                            <HStack spacing={[2,8]} fontSize={[10,20]}>
                            <a href="#intro-section">Introduction</a>
                            <a href="#axis-section">Axis</a>
                            <a href="#events-section">Events</a>
                            <a href="#team-section">Team</a>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    )
}
export default Header
