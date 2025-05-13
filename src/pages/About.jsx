import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";


const About = () =>  {

    const MotionImage = motion(Image);

    return(
        <>
        <Box  bgColor={"rgb(26,32,44)"} pt={"2%"} pb={"10%"} border={"0px solid yellow"} h={{base:"100vh", sm:"100vh", md:"100vh", lg:"auto", xl:"auto"}}>
            <Flex border={"0px solid yellow"} w={"100%"} p={"5%"} 
            direction={{base:"column", sm:"column", md:"column", lg:"row", xl:"row"}}
            >
                <Box m={"auto"} w={{base:"100%", sm:"100%", xl:"50%"}} border={"0px solid yellow"}>
                    <Box m={"auto"}  mt={"10%"} w={"50%"} border={"0px solid black"}> 
                        <MotionImage
                            m={{base:"auto", sm:"auto"}}
                            src="/raghvendrabhadouriya.jpg"
                            w={"100%"} 
                            borderRadius={"20px"} 
                            boxShadow={"0px 0px 40px #0ef"}
                            alt="animated"
                            animate={{ y: [0, -20, 0] }}  // move up and down
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "loop"
                            }}
                        />
                    </Box>
                </Box>
                <Box m={"auto"} w={{base:"100%", sm:"100%", xl:"50%"}} border={"0px solid yellow"}>
                    <Heading 
                    textAlign={"center"} 
                    fontSize={{ base:"18px", sm:"20px", md:"30px", lg:"25px", xl:"x-large"}} 
                    textDecoration={"underline"} 
                    color={"red"}
                    >
                        About <span style={{color : "white"}}>Me</span>
                    </Heading>
                    <Text 
                        mt={"4%"}
                        // fontSize={{ base: "10px", sm: "12px", md: "14px", lg: "16px", xl: "18px" }}
                        fontWeight={"semibold"}
                        // lineHeight={{ base: 2, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                        {/* Hi, I'm Raghvendra Bhadouriya — a passionate Full Stack Web Developer with a good command of the MERN stack (MongoDB, Express.js, React.js, and Node.js).
                        I recently started my journey in web development and have built several solo projects that helped me understand both frontend and backend development.
                        I'm always eager to learn new technologies, write clean and efficient code, and improve my problem-solving skills. As a fresher, I'm open to new opportunities where I can grow, learn, and contribute to real-world projects.
                        Thank you for visiting my portfolio! */}
                        Hi, I’m Raghvendra Singh Bhadouriya, a passionate Full Stack Web Developer with a strong grasp of the MERN stack — MongoDB, Express.js, React.js, and Node.js.
                        I recently completed a full-time intensive Full Stack Web Development course at Masai School, where I worked on multiple solo that challenged me to think critically and build real-world applications from scratch.
                    </Text>
                    <Text
                    mt={"2%"}
                    // fontSize={{ base: "10px", sm: "12px", md: "14px", lg: "16px", xl: "18px" }}
                    fontWeight={"semibold"}
                    // lineHeight={{ base: 2, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                        While I’m at the beginning of my professional journey, my commitment to learning and building never stops.
                    </Text>
                    <Text
                    mt={"2%"}
                    // fontSize={{ base: "10px", sm: "12px", md: "14px", lg: "16px", xl: "18px" }}
                    fontWeight={"semibold"}
                    // lineHeight={{ base: 2, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                        I enjoy diving deep into both frontend and backend technologies, writing clean code, and solving problems through logic and design. I'm eager to join a team where I can keep improving and contribute meaningfully.
                    </Text>
                    <Box mt={"2%"}>
                        
                        <Text
                        // fontSize={{ base: "10px", sm: "12px", md: "14px", lg: "16px", xl: "18px" }}
                        fontWeight={"semibold"}
                        // lineHeight={{ base: 2, sm: 4, md: 6, lg: 8, xl: 10 }}
                        >
                            Outside of coding, I love spending time in nature — sitting in peaceful, natural environments helps me recharge and stay inspired. I also enjoy playing games and singing, which keep me creative and balanced.
                        </Text>
                        <Text
                        mt={"2%"}
                        color={"gray"}
                        // fontSize={{ base: "10px", sm: "12px", md: "14px", lg: "16px", xl: "18px" }}
                        fontWeight={"semibold"}
                        // lineHeight={{ base: 2, sm: 4, md: 6, lg: 8, xl: 10 }}
                        >
                            I believe in continuous learning, practical problem-solving, and building products that make a difference.
                        </Text>
                    </Box>
                </Box>
            </Flex>

            {/* <Box w={"90%"} m={"auto"} mt={"10%"} border={"1px solid yellow"}>
                <Heading textAlign={"center"} color={"skyblue"}>Find Me On</Heading>
                    <Text textAlign={"center"}>Feel Free To <span style={{color:"red"}}>Connect</span> With Me</Text>
                <Box></Box>
            </Box> */}
        </Box>
        </>
    )
}

export default About ;