import { Box, Flex, Card, CardBody, Grid, GridItem, Text, Image, CardHeader, Heading, Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios"
import Loading from "../components/Loading";
import Error from "../components/Error";

const Skill = () =>  {
    const [ languages, setLanguages ] = useState([])
    const [ technologies, setTechnologies ] = useState([])
    const [ tools, setTools ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)


    async function fetchLanguages(){
        setLoading(true)
        try {
            let res = await axios({
                method: "get",
                url: `https://raghvendra-bhadouriya-portfolio-bc-api.onrender.com/skill/language`
            })
            console.log(res.data.data)
            setLanguages(res.data.data)
            setLoading(false)
            setError(false)
        } catch (error) {
            console.log("error in fetching Languages", error.message)
            setError(true)
            setLoading(false)
        }
    }

    async function fetchTechnologies(){
        setLoading(true)
        try {
            let res = await axios({
                method: "get",
                url: `https://raghvendra-bhadouriya-portfolio-bc-api.onrender.com/skill/technology`
            })
            console.log(res.data.data)
            setTechnologies(res.data.data)
            setLoading(false)
            setError(false)
        } catch (error) {
            console.log("error in fetching Technologies", error.message)
            setError(true)
            setLoading(false)
        }
    }

    async function fetchTools(){
        setLoading(true)
        try {
            let res = await axios({
                method: "get",
                url: `https://raghvendra-bhadouriya-portfolio-bc-api.onrender.com/skill/tools`
            })
            console.log(res.data.data)
            setTools(res.data.data)
            setLoading(false)
            setError(false)
        } catch (error) {
            console.log("error in fetching Tools", error.message)
            setError(true)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchLanguages();
        fetchTechnologies();
        fetchTools();
    }, [])

    if(loading){
        return (
            <>
            <Loading/>
            </>
        )
    }
    
    if(error){
        console.log("error message in error of skill")
        return (
            <>
            <Error/>
            </>
        )
    }

    return(
        <>
        <Box
            h={{ base:"auto", sm:"auto", md:"100vh", lg:"auto", xl:"auto" }}
            pt={"5%"}
            backgroundAttachment={"fixed"}
            bgImage={`url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTKewXL5Zy27FSWFkCIeZvUJrPpvdQmwgECg&usqp=CAU")`}
        >
            <Box p={"5%"}>

                <Heading 
                textAlign={"center"} 
                fontSize={"xx-large"}
                >
                    Languages
                </Heading>
                <Grid
                mt={"2%"}
                templateColumns={{base:"repeat(2, 1fr)", sm:"repeat(2, 1fr)", md:"repeat(4, 1fr)", lg:"repeat(5, 1fr)", xl:"repeat(5, 1fr)"}}
                justifyItems={"center"}
                gap={6}
                >
                    
                    { languages.map((language, index) => {
                        return(
                            <>
                            <GridItem key={index}>
                            <Card bgColor={"rgb(26,32,44)"}
                            boxShadow = {"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"}
                            >
                                <CardHeader w="150px" h="80px" >
                                    <Image 
                                    w="100%"
                                    h="80px"
                                    objectFit="contain"
                                    src={language.img}
                                    />
                                </CardHeader>
                                <CardBody>
                                    {/* <Text textAlign={"center"} fontWeight={"semibold"}>
                                        {language.title}
                                    </Text> */}
                                </CardBody>
                            </Card>
                            </GridItem>
                            </>
                        )
                    })}
                    
                </Grid>
            </Box>

            <Box p={"5%"}>
                <Heading textAlign={"center"} fontSize={"xx-large"}>Technologiess</Heading>
                <Grid
                mt={"2%"}
                templateColumns={{base:"repeat(2, 1fr)", sm:"repeat(2, 1fr)", md:"repeat(4, 1fr)", lg:"repeat(5, 1fr)", xl:"repeat(5, 1fr)"}}
                justifyItems={"center"}
                gap={6}
                >
                    
                    { technologies.map((technology, index) => {
                        return(
                            <>
                            <GridItem key={index}>
                            <Card bgColor={"rgb(26,32,44)"}
                            boxShadow = {"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"}
                            >
                                <CardHeader w="150px" h="80px"> 
                                    <Image 
                                    w="100%"
                                    h="80px"
                                    objectFit="contain"
                                    src={technology.img}
                                    />
                                </CardHeader>
                                <CardBody>
                                    {/* <Text textAlign={"center"} fontWeight={"semibold"}>
                                        {technology.title}
                                    </Text> */}
                                </CardBody>
                            </Card>
                            </GridItem>
                            </>
                        )
                    })}
                    
                </Grid>
            </Box>

            <Box p={"5%"}>
                <Heading textAlign={"center"} fontSize={"xx-large"}>Tools</Heading>
                <Grid
                mt={"2%"}
                templateColumns={{base:"repeat(2, 1fr)", sm:"repeat(2, 1fr)", md:"repeat(4, 1fr)", lg:"repeat(5, 1fr)", xl:"repeat(5, 1fr)"}}
                justifyItems={"center"}
                gap={6}
                >
                    
                    { tools.map((tool, index) => {
                        return(
                            <>
                            <GridItem key={index}>
                            <Card bgColor={"rgb(26,32,44)"}
                            boxShadow = {"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"}
                            >
                                <CardHeader w="150px" h="80px">
                                    <Image 
                                    w="100%"
                                    h="80px"
                                    objectFit="contain"
                                    src={tool.img}
                                    />
                                </CardHeader>
                                <CardBody>
                                    {/* <Text textAlign={"center"} fontWeight={"semibold"}>
                                        {tool.title}
                                    </Text> */}
                                </CardBody>
                            </Card>
                            </GridItem>
                            </>
                        )
                    })}
                    
                </Grid>
            </Box>
        </Box>
        </>
    )
}

export default Skill ;

// boxShadow = {"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"}


// <Grid
//                 border={"0px solid green"}
//                 pt={"5%"}
//                 templateColumns={{base:"repeat(2, 1fr)", sm:"repeat(2, 1fr)", md:"repeat(2, 1fr)", lg:"repeat(3, 1fr)", xl:"repeat(1, 1fr)"}}
//                 columnGap={"5"}
//             >
//                 <GridItem>
//                     <Card
//                         w={"80%"}
//                         h={"70vh"}
//                         m={"auto"}
//                         bgColor={"rgb(45,55,72)"}
//                         borderRadius={"20px"}
//                         boxShadow = {"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"}
//                     >
//                         <CardHeader>
//                             <Heading textAlign={"center"} fontSize={"x-large"}>Languages</Heading>
//                         </CardHeader>
//                         <CardBody>
//                             <Stack spacing={6}>
//                         {languages.map((language) => {
//                             return(
//                                 <>
//                                 <Flex justifyContent={"space-between"}>
//                                     <Box w={"15%"}>
//                                         <Image w={"100%"}
//                                             src={language.img}
//                                         />
//                                     </Box>
                                    
//                                     <Text fontWeight={"semibold"}>{language.title}</Text>
//                                 </Flex>
//                                 </>
//                             )
//                         })}
//                         </Stack>
//                         </CardBody>
//                     </Card>
//                 </GridItem>
//             </Grid>






//             <Grid
//                 border={"0px solid green"}
//                 pt={"5%"}
//                 templateColumns={{base:"repeat(2, 1fr)", sm:"repeat(2, 1fr)", md:"repeat(2, 1fr)", lg:"repeat(3, 1fr)", xl:"repeat(3, 1fr)"}}
//                 columnGap={"5"}
//             >
//                 <GridItem>
//                     <Card
//                         w={"80%"}
//                         h={"70vh"}
//                         m={"auto"}
//                         bgColor={"rgb(45,55,72)"}
//                         borderRadius={"20px"}
//                         boxShadow = {"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"}
//                     >
//                         <CardHeader>
//                             <Heading textAlign={"center"} fontSize={"x-large"}>Technologies</Heading>
//                         </CardHeader>
//                         <CardBody>
//                             <Stack spacing={6}>
//                         {technologies.map((technology) => {
//                             return(
//                                 <>
//                                 <Flex justifyContent={"space-between"}>
//                                     <Box w={"15%"}>
//                                         <Image w={"100%"}
//                                             src={technology.img}
//                                         />
//                                     </Box>
                                    
//                                     <Text fontWeight={"semibold"}>{technology.title}</Text>
//                                 </Flex>
//                                 </>
//                             )
//                         })}
//                             </Stack>
//                         </CardBody>
//                     </Card>
//                 </GridItem>
//             </Grid>
//             <Grid
//                 border={"0px solid green"}
//                 pt={"5%"}
//                 templateColumns={{base:"repeat(2, 1fr)", sm:"repeat(2, 1fr)", md:"repeat(2, 1fr)", lg:"repeat(3, 1fr)", xl:"repeat(3, 1fr)"}}
//                 columnGap={"5"}
//             >
//                 <GridItem>
//                     <Card 
//                         w={"80%"}
//                         h={"70vh"}
//                         m={"auto"}
//                         bgColor={"rgb(45,55,72)"}
//                         borderRadius={"20px"}
//                         boxShadow = {"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"}
//                     >
//                         <CardHeader>
//                             <Heading textAlign={"center"} fontSize={"x-large"}>Tools</Heading>
//                         </CardHeader>
//                         <CardBody>
//                             <Stack spacing={6}>
//                         {tools.map((tool) => {
//                             return(
//                                 <>
//                                 <Flex justifyContent={"space-between"}>
//                                     <Box w={"15%"}>
//                                         <Image w={"100%"}
//                                             src={tool.img}
//                                         />
//                                     </Box>
                                    
//                                     <Text fontWeight={"semibold"}>{tool.title}</Text>
//                                 </Flex>
//                                 </>
//                             )
//                         })}
//                             </Stack>
//                         </CardBody>
//                     </Card>
//                 </GridItem>
//             </Grid>