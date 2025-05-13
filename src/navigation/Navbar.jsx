import { Box, Heading, Flex, Text } from "@chakra-ui/react"
import { BiMenu } from 'react-icons/bi';
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { SidebarContext } from "../contextApi/SidebarContext";

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useContext(SidebarContext)

    return(
        <>
        <Box 
            as="nav" 
            color={"white"}
            p={"1%"}
            w={"100%"}
            position="fixed"
            top={0} 
            zIndex={100}
            //bgColor={"rgb(15, 14, 58)"}
            bg="transparent"
            backdropFilter="blur(10px)"
            boxShadow="rgba(0, 0, 0, 0.3) 0px 4px 12px"
            display={{base:"none", sm:"none", md:"none", lg:"block", xl:"block"}}
        >
            <Flex border={"0px solid red"} w={"90%"} m={"auto"} justifyContent={"space-between"}>
                <Flex as={RouterLink} to="/" border={"0px solid yellow"} >
                    <Text 
                    as={RouterLink} to="/"
                    color= "red"
                    fontWeight={"bold"}
                    fontSize={{ base: "10px", sm: "15px", md: "20px", lg: "25px", xl: "25px" }}
                    >{`Raghvendra`}</Text>
                    <Text
                    as={RouterLink} to="/"
                    color= "white"
                    fontWeight={"bold"}
                    fontSize={{ base: "10px", sm: "15px", md: "20px", lg: "25px", xl: "25px" }}
                    >{`Bhadouriya`}</Text>
                </Flex>

                <Flex 
                    w={"50%"}
                    gap="1rem"
                    wrap="wrap"
                    border={"0px solid white"}
                    justifyContent={"space-around"}
                >
                    <ChakraLink as={RouterLink} to="/" fontWeight="bold">Home</ChakraLink>
                    <ChakraLink as={RouterLink} to="/about" fontWeight="bold">About</ChakraLink>
                    <ChakraLink as={RouterLink} to="/skills" fontWeight="bold">Skills</ChakraLink>
                    <ChakraLink as={RouterLink} to="/projects" fontWeight="bold">Projects</ChakraLink>
                    <ChakraLink as={RouterLink} to="/github_insights" fontWeight="bold">GitHub Insights</ChakraLink>
                    <ChakraLink as={RouterLink} to="/contact" fontWeight="bold">Contact</ChakraLink>
                </Flex>
            </Flex>
        </Box>

        {/* ====================Second Navbar================= */}
        <Box
            as="nav"
            color={"white"}
            p={"1%"}
            w={"100%"}
            position="fixed"
            top={0} 
            zIndex={100}
            bg="transparent"
            backdropFilter="blur(10px)"
            boxShadow="rgba(0, 0, 0, 0.3) 0px 4px 12px"
            display={{base:"block", sm:"block", md:"block", lg:"none", xl:"none"}}
        >
            <Flex border={"0px solid red"} justifyContent={"space-between"}>
                <Heading border={"0px solid yellow"} fontSize={{base:"sm", md:"md", lg:"x-large"}}>
                    <span style={{ color: "red" }}>{`Raghvendra`}</span>
                    <span style={{ color: "white" }}>{`Bhadouriya`}</span>
                </Heading>

                <BiMenu size={25} color="black" onClick={onOpen} />
            </Flex>

            <Sidebar isOpen={ isOpen } onClose={ onClose }/>
        </Box>
        </>
    )
}

export default Navbar ;