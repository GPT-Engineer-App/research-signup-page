import { Container, VStack, Heading, FormControl, FormLabel, Input, Button, useToast, Box, Text, Flex, Link } from "@chakra-ui/react";
import { useState } from "react";
import { FaUniversity } from "react-icons/fa";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to a server
    toast({
      title: "Form submitted.",
      description: "Thank you for signing up for our research study.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setName("");
    setEmail("");
    setDetails("");
  };

  const handleForgotPassword = () => {
    setForgotPassword(true);
    toast({
      title: "Password reset link sent.",
      description: "Please check your email for the password reset link.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" p={4} bg="gray.50">
      <Box as="header" width="100%" bgImage="url('/path/to/realistic-background.jpg')" bgSize="cover" color="white" p={4} textAlign="center">
        <Flex align="center" justify="center">
          <FaUniversity size="2em" />
          <Heading as="h1" size="lg" ml={2} textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)">Research Study Sign-Up</Heading>
        </Flex>
      </Box>
      <Box bg="white" p={6} rounded="md" shadow="md" width="100%" mt={6}>
        <VStack spacing={4} as="form" onSubmit={handleSubmit} width="100%">
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <Link color="teal.500" onClick={handleForgotPassword} alignSelf="flex-start">Forget Password?</Link>
          <FormControl id="details">
            <FormLabel>Additional Details</FormLabel>
            <Input type="text" value={details} onChange={(e) => setDetails(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="blue" mt={4}>Submit</Button>
        </VStack>
      </Box>
      <Box as="footer" width="100%" bg="blue.800" color="white" p={4} textAlign="center" mt={4}>
        <Text>Contact us at <Link href="mailto:research@university.edu" color="teal.200">research@university.edu</Link></Text>
      </Box>
    </Container>
  );
};

export default Index;