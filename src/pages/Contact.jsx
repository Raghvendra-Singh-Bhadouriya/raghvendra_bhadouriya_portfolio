import { Box, Flex, Heading, Text, Image, Stack } from "@chakra-ui/react";

const Contact = () =>  {
    const socialConnect = [
        {
            id: 1,
            img: "https://cdn-icons-png.flaticon.com/128/5968/5968534.png",
            link: "mailto:raghvendrabhadouriya2003@gmail.com"
        },
        {
            id: 2,
            img: "https://cdn-icons-png.flaticon.com/128/16566/16566143.png",
            link: "https://wa.me/918319109574"
        },
        {
            id: 3,
            img: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
            link: "https://www.linkedin.com/in/raghvendra-bhadouriya-709795291"
        },
        {
            id: 4,
            img: "https://cdn-icons-png.flaticon.com/128/25/25657.png",
            link: "https://github.com/Raghvendra-Singh-Bhadouriya"
        },
        {
            id:5,
            img:"https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
            link: "https://www.instagram.com/raghvendra_bhadouriya/"
        }
    ]
    return(
        <>
        <Box h={{base:"auto", sm:"auto", md:"auto", lg:"100vh", xl:"100vh"}} p={"10%"} border={"0px solid yellow"} bgColor={"rgb(26,32,44)"}>
            <Box m={"auto"} border={"0px solid yellow"}>
            <Stack spacing={2}>
                <Heading textAlign={"center"} color={"skyblue"} fontSize={{base:"base", sm:"sm", md:"2xl", lg:"4xl", xl:"xx-large"}} textDecoration={"underline"}>
                    Find Me On
                </Heading>
                <Text textAlign={"center"} fontSize={{base:"base", sm:"sm", md:"xl", lg:"xl", xl:"xl"}}>
                    Feel Free To <span style={{color:"red"}}>Connect</span> With Me 😊
                </Text>
            
                <Flex mt={"5%"} justifyContent={"space-around"} direction={{base:"column", sm:"column", md:"column", lg:"row", xl:"row"}}>
                    {socialConnect.map((connect) => {
                        return(
                        <>
                            <Box
                                as="a" 
                                w={"100%"}
                                mt={{ base:"5%", sm:"5%", md:"5%" }}
                                target="_blank"
                                rel="noopener noreferrer"
                                href= {connect.link}
                                boxShadow={"0px 0px 40px #0ef"}
                                borderRadius={"50px"}
                            >
                                <Image w={{base:"30%", sm:"30%", md:"30%", lg:"50%", xl:"50%"}} m={"auto"} src={connect.img}/>
                            </Box>
                        </>
                        )
                    })}
                </Flex>
            </Stack>
            </Box>
        </Box>
        </>
    )
}

export default Contact ;