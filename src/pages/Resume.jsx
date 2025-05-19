import React from 'react';
import { Box, Heading } from "@chakra-ui/react";




    const Resume = () => {
        return(
            <>
            <Box p={10}>
                {/* <Heading mt={"5%"} textAlign="center" mb={4}>My Resume</Heading> */}
                <Box height="90vh">
                  <iframe
                    src="/RaghvendraSinghBhadouriya-GeneralProfessional-CVie.pdf"
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                    title="Resume"
                  />
                </Box>
            </Box>
            </>
        )
    }

export default Resume ;