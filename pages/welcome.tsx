import React from 'react';
import NextLink from 'next/link';
import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react';
import Helmet from '../components/helmet';
import { GlobalHeader } from '../components/global-header';
import { Footer } from '../components/footer';
import { PageWrapper } from '../components/page-wrapper';
import { OpensourceBanner } from '../components/opensource-banner';
import { TeamsBanner } from '../components/teams-banner';

export default function WelcomePage() {
  return (
    <PageWrapper>
      <GlobalHeader variant={'transparent'} />
      <Helmet title="Welcome" />

      <Box>
        <Container maxW="container.md" pb="90px">
          <Box pt={["40px", "45px", "70px"]} color="gray.200">
            <Heading
              color="gray.50"
              fontSize={["28px", "32px", "40px"]}
              fontWeight={800}
              mb={["10px", "12px", "16px"]}
            >
              Welcome to roadmap.sh 🎉
            </Heading>
            <Text fontSize={["14px", "15px", "17px"]} color="gray.200" mb={["18px", "20px", "24px"]}>
              Community-driven roadmaps, guides, and videos to help you learn and grow as a developer.
            </Text>

            <Stack direction={["column", "row"]} spacing={["10px", "12px"]}>
              <Button
                as={NextLink}
                href="/"
                size="md"
                bg="green.500"
                color="white"
                _hover={{ bg: 'green.600', textDecoration: 'none' }}
              >
                Explore Roadmaps
              </Button>

              <Button
                as={NextLink}
                href="/about"
                size="md"
                bg="blue.500"
                color="white"
                _hover={{ bg: 'blue.600', textDecoration: 'none' }}
                variant="solid"
              >
                Learn About Us
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <OpensourceBanner />
      <TeamsBanner />
      <Footer />
    </PageWrapper>
  );
}
