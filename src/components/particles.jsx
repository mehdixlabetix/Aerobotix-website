import Particles from "react-tsparticles";
import {loadSlim} from "tsparticles-slim";
import {useCallback, useMemo} from "react";

const ParticlesComponent = () => {
    const options = useMemo(() => {
        return {
            particles: {
                background: {
                    color: {
                        value: "#ffffff"
                    }

                },
                fullscreen: {
                    enable: true,
                    zIndex: -1
                },
                move: {
                    enable: true,
                    speed: 0.5
                },
                number: {
                    value: 100
                },
                size: {
                    value: 3
                },
                opacity: {
                    value: 0.3
                },
                color: {
                    value: "#000000"
                },
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push"
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse"
                        }
                    }
                },
                links: {
                    enable: true,
                    distance: 100,
                    color: "#000000",
                    opacity: 0.4,
                    width: 1
                },


            }

        }
    }, []);
    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
    }, []);
    return (
        <Particles
            id="tsparticles"
            options={options}
            init={particlesInit}

        />
    );

}
export default ParticlesComponent;