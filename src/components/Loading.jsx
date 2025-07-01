import { VStack, Spinner, Text } from "@chakra-ui/react"



const Loading = () => {
    return (
        <>
        <VStack 
        h={{ base:"100vh", sm:"100vh", md:"100vh", lg:"100vh", xl:"100vh" }}
        w={"100%"}
        bgColor={"rgb(26,32,44)"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={4}
        border={"0px solid black"}
        >
            <Spinner color="colorPalette.600" />
            <Text color="colorPalette.600">Please wait data is fetching...</Text>
        </VStack>
        </>
    )
}

export default Loading ;