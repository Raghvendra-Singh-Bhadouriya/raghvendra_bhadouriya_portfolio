import { Box, Card, CardBody, CardHeader, CardFooter, Grid, GridItem, Image, Heading, Stack, Text, Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Project = () =>  {

    const [ projectData, setProjectData ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)

    async function fetchProjects(){
        setLoading(true)
        try {
            const res = await axios({
                method: "get",
                url: `https://raghvendra-bhadouriya-portfolio-bc-api.onrender.com/projects`
            })
            console.log(res.data)
            setProjectData(res.data.projects)
            setLoading(false)
            setError(false)
        } catch (error) {
            console.log("Erron in fetching projects", error.message)
            setError(true)
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchProjects()
    }, [])


    if(loading){
        return (
            <>
            <Loading/>
            </>
        )
    }

    if(error){
        return (
            <>
            <Error/>
            </>
        )
    }

    return(
        <>
        <Box
            bgColor={"rgb(26,32,44)"}
            pt={"5%"}
        >
            <Grid templateColumns={{base:"repeat(1, 1fr)", sm:"repeat(2, 1fr)", md:"repeat(2, 1fr)", lg:"repeat(3, 1fr)", xl:"repeat(4, 1fr)"}} gap={6} p={5}>
            {projectData.map((project) => (
                <GridItem key={project._id}>
                    <Card bgColor={"rgb(45,55,72)"} h={{ base:"auto", sm:"auto", md:"65vh", lg:"auto", xl:"90vh"}} borderRadius={"10px"}>
                        <CardHeader border={"1px solid teal"} borderRadius={"10px"}>
                            <Image h={"25vh"} m={"auto"} src={project.img} alt={project.title} borderRadius="md" />
                        </CardHeader>
                        <CardBody>
                            <Stack spacing={4}>
                            <Heading fontSize={"lg"}>{project.title}</Heading>
                            
                            <Text fontSize={"sm"} fontWeight={"semibold"}>{project.language.join(","+" ")}</Text>
                            
                            <Text>{project.desc}</Text>
                            </Stack>
                        </CardBody>
                        <CardFooter>
                            {/* <Flex justifyContent={"space-between"}> */}
                                <Button as={"a"} href={project.github} target="_blank" colorScheme="teal" size="sm">
                                    GitHub
                                </Button>
                                <Button as={"a"} href={project.liveSite} target="_blank" ml={2} size="sm">
                                    Live
                                </Button>
                            {/* </Flex> */}
                        </CardFooter>
                    </Card>
                </GridItem>
            ))}
            </Grid>

        </Box>
        </>
    )
}

export default Project ;