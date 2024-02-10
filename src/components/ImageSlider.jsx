import {useEffect, useState} from "react";
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

import {Heading, HStack, Image} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection.jsx";

const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentImageIndex2, setCurrentImageIndex2] = useState(0);

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
    const displayedImages = images.slice(currentImageIndex, currentImageIndex + 4);
    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 4) % images.length);
        setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % images.length);
    };
    const windowWidth = window.innerWidth;

    useEffect(() => {
        // Add an interval for automatic image sliding
        const intervalId = setInterval(handleNextImage, 3000); // Slide every 3 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    },);

    if (windowWidth > 750) {
        return (
            <FullScreenSection id="image-section" width={window.innerWidth - window.innerWidth / 10} height="100vh"
                               justifyContent="center" alignItems="center">
                <Heading color="var(--title)" as="h1" size={["xl", "2xl"]} padding="0% 2% 10% 2%"> Precious
                    Memories</Heading>
                <HStack width="100%" spacing={[4, 10]}>
                    {displayedImages.map((img) => {
                        return (
                            <Image
                                zIndex={1}
                                id="memories"
                                objectFit="fill"
                                key={img}
                                src={img}
                                alt="Image"

                            />)
                    })}
                </HStack>
            </FullScreenSection>
        );
    } else {
        return (
            <FullScreenSection id="image-section" width={window.innerWidth - window.innerWidth / 10} height="100vh"
                               justifyContent="center" alignItems="center">
                <Heading color="var(--title)" as="h1" size={["xl", "2xl"]} padding="0% 2% 10% 2%"> Precious
                    Memories</Heading>

                <Image
                    zIndex={1}
                    id="memories"
                    objectFit="fill"
                    key={images[currentImageIndex2]}
                    src={images[currentImageIndex2]}
                    alt="Image"

                />
            </FullScreenSection>
        );
    }
};

export default ImageSlider;