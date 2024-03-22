import { Container, Box, Stack } from "@chakra-ui/react";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { SEO } from "components/seo/seo";
import { getPosts } from 'pages/api/posts'
import type { GetStaticProps } from 'next'

import { AllPost } from "components/posts";

export default function Blog({ posts }: { posts: NestedPostObject[] }) {
  return (
    <Box position="relative" overflow="hidden" pb={{ base: 20, lg: 20 }}>
      <BackgroundGradient height="100%" />
      <Container maxW="container.xl" pt={{ base: 20, lg: 20 }}>
        <SEO
          title="Blog — Cleek"
          description="Cleek - AI infrastructure for everyone, extensible (Function Calling), high-performance chatbot framework. Get your own AI chat service with OpenAI & LLM web application."
        />
        <AllPost posts={posts} />
      </Container>
    </Box >
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts()

  return {
    props: { posts },
  }
}
