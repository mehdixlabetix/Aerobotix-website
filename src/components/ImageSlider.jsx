import {useEffect, useMemo, useRef} from "react";
import aero1 from "/aero/aero1.jpg";
import aero2 from "/aero/aero2.jpg";
import aero3 from "/aero/aero3.jpg";
import aero4 from "/aero/aero4.jpg";
import aero5 from "/aero/aero5.jpg";
import aero6 from "/aero/aero6.jpg";
import aero7 from "/aero/aero7.jpg";
import aero8 from "/aero/aero8.jpg";
import aero9 from "/aero/aero9.jpg";
import aero10 from "/aero/aero10.jpg";
import aero11 from "/aero/aero11.jpg";
import aero12 from "/aero/aero12.jpg";
import aero13 from "/aero/aero13.jpg";
import aero14 from "/aero/aero14.jpg";
import aero15 from "/aero/aero15.jpg";
import aero16 from "/aero/aero16.jpg";

import {Heading, Image} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection.jsx";

const ImageSlider = () => {

    const images = [
        aero1,
        aero2,
        aero3,
        aero4,
        aero5,
        aero6,
        aero7,
        aero8,
        aero9,
        aero10,
        aero11,
        aero12,
        aero13,
        aero14,
        aero15,
        aero16,
    ];
    const scrollers = useRef(null);
    const scrollerInner = useRef(null);
    const windowWidth = window.innerWidth;
    const imagesMemoized = useMemo(() =>
        images.map((img) => {
            return (
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

                />)
        })
    , [images, windowWidth]);
    useEffect(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }
    }, []);

    function addAnimation() {
        if (scrollers.current)
            scrollers.current.setAttribute('data-animated', true);
        if (scrollerInner.current) {
            const scrollerInnerContent = Array.from(scrollerInner.current.children);
            scrollerInnerContent.forEach((child) => {
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
                        <div key={item}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </FullScreenSection>
    );
}

export default ImageSlider;