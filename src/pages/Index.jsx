import { Container, Box, VStack, HStack, Text, Image, Button, IconButton, Input, InputGroup, InputRightElement, Heading } from "@chakra-ui/react";
import { FaSearch, FaHome, FaPhone, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <HStack justifyContent="space-between" mb={8}>
        <HStack spacing={4}>
          <FaHome size="2em" />
          <Heading as="h1" size="lg">
            Real Estate
          </Heading>
        </HStack>
        <HStack spacing={4}>
          <Button leftIcon={<FaPhone />} colorScheme="teal" variant="outline">
            Contact Us
          </Button>
          <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="outline">
            Email Us
          </Button>
        </HStack>
      </HStack>

      {/* Search Bar */}
      <InputGroup mb={8}>
        <Input placeholder="Search for properties..." />
        <InputRightElement>
          <IconButton aria-label="Search" icon={<FaSearch />} />
        </InputRightElement>
      </InputGroup>

      {/* Featured Properties */}
      <VStack spacing={8}>
        <Heading as="h2" size="md">
          Featured Properties
        </Heading>
        <HStack spacing={8} wrap="wrap" justifyContent="center">
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZXxlbnwwfHx8fDE3MTc0Mzc4NDB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Modern House" />
            <Box p={6}>
              <Box d="flex" alignItems="baseline">
                <Text fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" color="teal.600">
                  3 Beds &bull; 2 Baths
                </Text>
              </Box>
              <Heading as="h3" size="sm" mt={2}>
                Modern Family Home
              </Heading>
              <Text mt={2} color="gray.500">
                $500,000
              </Text>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnR8ZW58MHx8fHwxNzE3NDM3ODQxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Luxury Apartment" />
            <Box p={6}>
              <Box d="flex" alignItems="baseline">
                <Text fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" color="teal.600">
                  2 Beds &bull; 2 Baths
                </Text>
              </Box>
              <Heading as="h3" size="sm" mt={2}>
                Luxury Apartment
              </Heading>
              <Text mt={2} color="gray.500">
                $750,000
              </Text>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://images.unsplash.com/photo-1662944726441-a4ca20f6f3fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY290dGFnZXxlbnwwfHx8fDE3MTc0Mzc4NDF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Cozy Cottage" />
            <Box p={6}>
              <Box d="flex" alignItems="baseline">
                <Text fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" color="teal.600">
                  2 Beds &bull; 1 Bath
                </Text>
              </Box>
              <Heading as="h3" size="sm" mt={2}>
                Cozy Cottage
              </Heading>
              <Text mt={2} color="gray.500">
                $300,000
              </Text>
            </Box>
          </Box>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
