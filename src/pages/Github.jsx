import { Box, Flex, Heading, Image } from "@chakra-ui/react";

const Github = () =>  {
    return(
        <>
        <Box h={{base:"100vh", sm:"100vh", md:"100vh", lg:"auto", xl:"100vh"}} pt={"8%"} pb={"5%"} border={"0px solid yellow"} bgColor={"rgb(26,32,44)"}>
            <Heading fontSize={{base:"sm", sm:"sm", md:"x-large", xl:"x-large"}} textAlign={"center"}>
                GitHub_<span style={{color:"red"}}>Insights</span>
            </Heading>
            <Box m={"auto"} pt={"2%"} w={{base:"90%", sm:"90%", md:"80%", lg:"60%", xl:"60%"}} border={"0px solid green"}>
                <Flex border={"0px solid red"} justifyContent={"space-between"} direction={{base:"column", sm:"column", md:"column", lg:"row", xl:"row"}}>
                    <Box w={{base:"100%", sm:"100%", md:"100%", lg:"45%", xl:"45%"}}>
                        <Image w={"100%"} src="https://github-readme-stats.vercel.app/api/top-langs/?username=Raghvendra-Singh-Bhadouriya&layout=compact&theme=vision-friendly-dark"/>
                    </Box>
                    <Box w={{base:"100%", sm:"100%", md:"100%", lg:"50%", xl:"50%"}}>
                        <Image w={"100%"} src="https://github-readme-stats.vercel.app/api?username=Raghvendra-Singh-Bhadouriya&show_icons=true&theme=vision-friendly-dark"/>
                    </Box>
                </Flex>
                {/* <Box w={"100%"} mt={"2%"} border={"0px solid yellow"}>
                    <Image m={"auto"} src="https://streak-stats.demolab.com/?user=Raghvendra-Singh-Bhadouriya&theme=vision-friendly-dark&date_format=j%20M%5B%20Y%5D"/>
                </Box> */}
                <Box mt={"2%"}>
                    <Image src="https://github-profile-trophy.vercel.app/?username=Raghvendra-Singh-Bhadouriya&theme=darkhub"/>
                </Box>
            </Box>
        </Box>
        </>
    )
}

export default Github ;