import { Box, Flex, Text } from "@chakra-ui/react"


const Footer = () => {

    return(
        <>
        <Box
        border={"0px solid yellow"} 
        as="footer"
        w="100%"
        py={4}
        px={6}
        bg="gray.800"
        color="white"
        bottom={0}
        textAlign="center"
        backdropFilter="blur(10px)"
        boxShadow="rgba(0, 0, 0, 0.3) 0px 4px 12px"
        >
            <Flex
            justifyContent={"space-between"}
            direction={{ base:"column", sm:"column", md:"column", lg:"row", xl:"row"}}
            bg="transparent">
                    <Text
                    bg="transparent"
                    >
                        Design and Develop by Raghvendra Singh Bhadouriya
                    </Text>
                    <Text
                    bg="transparent"
                    >
                        Copyright © 2025 RV Singh
                    </Text>
                    <Text
                    bg="transparent"
                    color={"skyblue"}
                    as={"a"}
                    href="mailto:raghvendrabhadouriya2003@gmail.com"
                    >
                        raghvendrabhadouriya2003@gmail.com
                    </Text>
            </Flex>
        </Box>
        </>
    )
}

export default Footer ;