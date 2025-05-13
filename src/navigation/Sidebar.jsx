import { Box, VStack, Slide } from "@chakra-ui/react"
import { BiX } from "react-icons/bi";

import { HashLink } from 'react-router-hash-link';

import { Link as RouterLink } from "react-router-dom"
import { Link as ChakraLink } from "@chakra-ui/react"

const Sidebar = ({isOpen, onClose}) => {

    return(
        <>
        <Slide direction="right" in={isOpen} style={{ zIndex: 1400 }}>
        <Box
            w={{ base: "70%", md: "50%" }}
            h={"100vh"}
            top={0}
            right={0}
            border={"1px solid yellow"}
            position={"absolute"}
            bg="rgba(15, 14, 58, 0.4)"
            backdropFilter="blur(20px)"
            boxShadow="rgba(243, 15, 15, 0.4) 0px 5px 15px"
            borderLeft="0px solid yellow"
            p={6}
            onClick={onClose}
        >
          
          <Box
            as="span"
            display="inline-block"
            p={1}
            position="absolute"
            top={0}
            right={2}
            cursor="pointer"
            onClick={onClose}
          >
            <BiX color="red" size={30} />
          </Box>

          <VStack spacing={6} align="start" mt={"5%"}>
            {[
              { id: "", label: "Home" },
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "github_insights", label: "GitHub Insights" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <HashLink
                key={item.id}
                smooth to={`/${item.id}`}
                fontSize="lg"
                fontWeight="medium"
                color="white"
                _hover={{ textDecoration: "underline", color: "yellow.300" }}
              >
                {item.label}
              </HashLink>
            ))}
          </VStack>
        </Box>
        </Slide>
      </>
    )
}

export default Sidebar ;