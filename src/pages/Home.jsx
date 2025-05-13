import { Box, Flex, Heading, Image, Text, Grid, Stack, Button } from "@chakra-ui/react"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";


const Home = () =>  {

    const MotionImage = motion(Image);

    return(
        <>
        <Box 
            bgImage={`url("/dark-office-desktop-with-computer-mouse_.avif")`}
            h={{ md:"auto"}}
            w="100%"
            pt={"2%"}
            pb={"10%"}
            //display={{base:"none", md:"none", lg:"block"}}
            backgroundAttachment="fixed"
        >
            
            <Flex mt={"10%"} border={"0px solid green"}>
                <Box w={"50%"} p={"5%"} border={"0px solid yellow"}>
                        <Text fontSize={{ base: "10px", sm: "12px", md: "14px", lg: "16px", xl: "xl" }} fontWeight={"bold"}>
                            Hi, there!
                        </Text>
                        <Heading
                            fontSize={{ base: "18px", sm: "12px", md: "20px", lg: "25px", xl: "xx-large" }}
                        >
                            Raghvendra Singh Bhadouriya
                        </Heading>
                        {/* <Text mt={"1%"} fontSize={"x-large"} fontWeight={"bold"}>And I'am <span style={{color:"skyblue"}}>Full Stack Web Developer</span></Text> */}
                        <Heading mt={"6%"} fontSize={{ base: "14px", sm: "12px", md: "18px", lg: "20px", xl: "xx-large" }} >
                            <span style={{ color: "skyblue" }}>
                            <Typewriter
                                words={['Full Stack Web Developer', 'MERN Stack Developer', 'Programmer']}
                                loop={0} // infinite loop
                                cursor
                                cursorStyle="|"
                                color="blue.300"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                            </span> 
                        </Heading>
                        <Text fontSize={{ base: "10px", sm: "12px", md: "16px", lg: "16px", xl: "lg" }} color="gray.300" fontWeight={"bold"}>
                            Specializing in the MERN Stack (MongoDB, Express, React, Node.js)
                        </Text>

                        <Box mt={"6%"}>
                            <Button as={Link} to="/resume"
                                boxShadow={"0px 0px 40px #0ef"} 
                                borderRadius={"50px"}
                            >
                                Resume
                            </Button>
                        </Box>
                        {/* <Text mt={"4%"} fontWeight={"semibold"} lineHeight={2}
                        fontSize={{ base: "10px", sm: "12px", md: "14px", lg: "16px", xl: "18px" }}
                        >
                            Adaptable and growth-oriented Full Stack Developer with strong proficiency in HTML, CSS, JavaScript, and hands-on experience in React.js, Node.js, Express.js, and MongoDB. Skilled in writing clean, maintainable code and using Git/GitHub for version control. Quick to learn new technologies and frameworks, with a solid foundation in frontend development and expanding backend capabilities. Passionate about building responsive, user-focused web applications through real-world projects and continuous learning.
                        </Text> */}
                </Box>

                <Box w={"50%"} border={"0px solid yellow"}>
                    <Box m={"auto"} mt={{base:"20%", xl:"0%"}} w={{base:"80%", xl:"50%"}} border={"0px solid green"}>
                        <MotionImage
                            src="/raghvendrabhadouriya.jpg"
                            animate={{ y: [0, -20, 0] }}  // move up and down
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "loop"
                            }}
                            w={"100%"} 
                            borderRadius={"full"} 
                            boxShadow={"0px 0px 40px #0ef"}  
                        />
                    </Box>
                </Box>
            </Flex>

            <Flex w={"90%"} m={"auto"} mt={"20%"} direction={{ base: "column", md: "row", lg:"row", xl:"row" }}>
                {/* <Box w={"90%"} m={"auto"} border={"1px solid blue"}> */}
                    <Box w={{base:"100%", xl:"60%"}}  border={"0px solid yellow"}>
                    <Stack spacing={6}>
                        <Heading fontSize={{ md:"xl", lg:"x-large", xl:"xx-large"}} textAlign={"center"} textDecoration={"underline"} textDecorationColor={"red"}>
                            Let ME <span style={{color:"red"}}>INTRODUCE</span> MYSELF
                        </Heading>
                        <Text 
                        // mt={"4%"}
                        fontWeight={"semibold"}
                        lineHeight={1}
                        // fontSize={{ base: "sm", sm: "12px", md: "15px", lg: "16px", xl: "18px" }}
                        >
                            I fell in love with web development, and each day I strive to learn and grow in this field.
                        </Text>
                        <Text
                        // mt={"4%"} 
                        fontWeight={"semibold"} 
                        lineHeight={1}
                        // fontSize={{ base: "sm", sm: "12px", md: "15px", lg: "16px", xl: "18px" }}
                        >
                            Though I'm just starting my professional journey, I’ve spent countless hours building projects, solving real-world problems, and sharpening my skills.
                        </Text>
                        <Text
                        // mt={"4%"}
                        fontWeight={"semibold"}
                        lineHeight={1}
                        // fontSize={{ base: "sm", sm: "12px", md: "15px", lg: "16px", xl: "18px" }}
                        >
                            I'm comfortable working with core web technologies like HTML, CSS, JavaScript, and I have hands-on experience with React.js, Node.js, Express, and MongoDB — the full MERN stack.
                        </Text>
                        <Text
                        // mt={"4%"}
                        fontWeight={"semibold"}
                        lineHeight={1}
                        // fontSize={{ base: "sm", sm: "12px", md: "15px", lg: "16px", xl: "18px" }}
                        >
                            My main interest lies in building responsive, user-friendly web applications and exploring the potential of modern frameworks and tools.
                        </Text>
                        <Text
                        // mt={"4%"}
                        fontWeight={"semibold"}
                        lineHeight={1}
                        // fontSize={{ base: "sm", sm: "12px", md: "15px", lg: "16px", xl: "18px" }}
                        >
                            Whenever I can, I put my passion into practice by creating projects that are both functional and meaningful.
                        </Text>
                        </Stack>
                    </Box>
                    <Box w={{ base:"100%", xl:"30%"}}  border={"0px solid yellow"}>
                        <Box w={"80%"} m={"auto"} mt={"15%"} boxShadow={"0px 0px 40px #0ef"} borderRadius={"20px"}>
                            <Image w={"100%"} borderRadius={"20px"}
                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmX3p2A5rrPjNaLXIL0jWXggc6D8LQEO9PMQ&s"
                            />
                        </Box>
                    </Box>
                {/* </Box> */}
            </Flex>

            
        </Box>
        </>
    )
}

export default Home ;
