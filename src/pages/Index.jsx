import { Container, VStack, Heading, FormControl, FormLabel, Input, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
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

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Research Study Sign-Up</Heading>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="details">
          <FormLabel>Additional Details</FormLabel>
          <Input type="text" value={details} onChange={(e) => setDetails(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" mt={4}>Submit</Button>
      </VStack>
    </Container>
  );
};

export default Index;