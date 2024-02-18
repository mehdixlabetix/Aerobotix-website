import {useEffect, useMemo, useRef} from "react";

import {Heading, Image} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection.jsx";

const ImageSlider = () => {
    const scrollers = useRef(null);
    const scrollerInner = useRef(null);
    const windowWidth = window.innerWidth;
    const imagesMemoized = useMemo(() =>{

        const images = [
            "/aero/aero1.jpg",
            "/aero/aero2.jpg",
            "/aero/aero3.jpg",
            "/aero/aero4.jpg",
            "/aero/aero5.jpg",
            "/aero/aero6.jpg",
            "/aero/aero7.jpg",
            "/aero/aero8.jpg",
            "/aero/aero9.jpg",
            "/aero/aero10.jpg",
            "/aero/aero11.jpg",
            "/aero/aero12.jpg",
            "/aero/aero13.jpg",
            "/aero/aero14.jpg",
            "/aero/aero15.jpg",
            "/aero/aero16.jpg",
        ];
        return images.map((img) => (
            <Image
                zIndex={1}
                height={['150px', '200px']}
                maxW={[windowWidth / 2, windowWidth / 6]}
                style={{
                    borderRadius: '10px',
                    minWidth: windowWidth / 5,
                    filter: 'drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.75))',
                }}
                objectFit="fill"
                key={img}
                src={img}
                alt="sliding memory"
            />
        ));}, [ windowWidth]);
    useEffect(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }
    }, []);

    function addAnimation() {
        if (scrollers.current) {
            scrollers.current.setAttribute('data-animated', true);
        }
        if (scrollerInner.current && scrollerInner.current.children.length < 32) {
            const originalChildren = Array.from(scrollerInner.current.children);
            originalChildren.forEach((child) => {
                const duplicatedItem = child.cloneNode(true);
                duplicatedItem.setAttribute('aria-hidden', 'true');
                scrollerInner.current.appendChild(duplicatedItem);
            });
        }
    }

    return (
        <FullScreenSection id="image-section" width={window.innerWidth - window.innerWidth / 10} height="100vh"
                           justifyContent="center" alignItems="center">
            <Heading color="var(--title)" as="h1" size={["xl", "2xl"]} padding="0% 2% 10% 2%">
                Precious Memories
            </Heading>
            <div className="scroller"
                 ref={scrollers}
                 style={{
                     maxWidth: windowWidth - windowWidth / 10,
                 }}>
                <div className='scroller__inner'
                     ref={scrollerInner}
                     style={{
                         display: 'flex',
                         gap: '1rem',
                         paddingBlock: '1rem',

                     }}>
                    {imagesMemoized.map((item) => (
                        <div key={item.props.src}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </FullScreenSection>
    );
}

export default ImageSlider;