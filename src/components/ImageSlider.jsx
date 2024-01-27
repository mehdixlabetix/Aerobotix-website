import  { useState, useEffect } from "react";
import {
    aero1,
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
    aero2,
} from "../assets/aero/export aero.js";
import {Heading, HStack, Image} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection.jsx";

const ImageSlider = () => {
const [currentImageIndex, setCurrentImageIndex] = useState(0 );
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
    console.log(displayedImages);
    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 4) % images.length);

    };

    useEffect(() => {
        // Add an interval for automatic image sliding
        const intervalId = setInterval(handleNextImage, 3000); // Slide every 3 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <FullScreenSection justifyContent="center" alignItems="center">
            <Heading color="wheat" as="h1" size="2xl" padding="3% 3% 10% 3%"> Precious Memories</Heading>
            <HStack width="100%" spacing={10}>
                {displayedImages.map((img)=>{return(
                    <Image
                    objectFit="cover"
                    key={img}
                    src={img}
                    alt="Image"
                    style={{ borderRadius: "10px", height: "200px" ,minWidth:"300px"}}
                />)})}
                </HStack>
        </FullScreenSection>
    );
};

export default ImageSlider;