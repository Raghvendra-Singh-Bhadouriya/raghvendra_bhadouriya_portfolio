import { Box, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react"

const Error = () => {
  return (
    <Box
    h={{ base:"100vh", sm:"100vh", md:"100vh", lg:"100vh", xl:"100vh" }}
    w={"100%"}
    bgColor={"rgb(26,32,44)"}
    display="flex"
    alignItems="center"
    justifyContent="center"
    px={4}
    border={"0px solid black"}
    >
        <Alert 
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        maxW="400px"
        borderRadius="md"
        boxShadow="md"
        >
        <AlertIcon />
        <Box>
          <AlertTitle>Oops!</AlertTitle>
          <AlertDescription>
            Something went wrong. Please refresh.
          </AlertDescription>
        </Box>
        </Alert>
    </Box>
  )
}

export default Error ; 