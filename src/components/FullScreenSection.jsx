import {VStack} from '@chakra-ui/react'

const FullScreenSection = ({children, isDarkBackground, ...boxProps}) => {
    return (
        <VStack
            backgroundColor={boxProps.backgroundColor}
            color={isDarkBackground ? 'white' : 'black'}
        >
            <VStack  {...boxProps}>
                {children}
            </VStack>
        </VStack>
    )
}

export default FullScreenSection
