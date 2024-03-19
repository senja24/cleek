import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  Icon,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Br } from "@saas-ui/react";
import { Em } from "components/typography";
import {
  FiArrowRight,
  FiCheck,
  FiCopy,
  FiShield,
  FiSmartphone,
  FiGlobe,
  FiSmile,
  FiUserCheck,
  FiNavigation,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";

import { ButtonLink } from "components/button-link/button-link";

import faq from "data/faq";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Cleek — Your own AI chat service"
        description="Cleek - AI infrastructure for everyone, extensible (Function Calling), high-performance chatbot framework. Get your own AI chat service with OpenAI & LLM web application."
        />
      <Box>
        <HeroSection />
        <HighlightsSection />
        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 40 }}>
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Box
            height={{ base: "auto", lg: "600px" }}
            width={{ base: "100%", lg: "50%" }}
            position="relative"
            order={{ base: 1, lg: 2 }}
          >
            <FallInPlace delay={1}>
              <HStack pt={{ base: 10, lg: 20 }} pb="5">
              </HStack>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/cleek.png"
                  layout="responsive"
                  width={1200}
                  height={762}
                  alt="Screenshot of a Chat in Cleek"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>

          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            textAlign={{ base: "center", lg: "left" }}
            order={{ base: 2, lg: 1 }}
            title={
              <FallInPlace>
                Cleek — AI infrastructure for everyone.
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Cleek is the <Em>Generative AI suite for professionals</Em>
                <Br /> who need powerful tools, novel workflows, and control over their data. With focus on productivity, functionality, and privacy, Cleek offers an alternative to ChatGPT that raises the bar on features, performance and quality.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="10" pb="5" justifyContent="flex-start">
                <ButtonLink
                  colorScheme="primary"
                  size="lg"
                  href="https://app.cleek.id"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }>
                  Get started now
                </ButtonLink>
              </HStack>
            </FallInPlace>
          </Hero>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 3]}
        iconSize={4}
        innerWidth="container.lg"
        pt="2"
        features={[
          {
            title: "Tailored AI",
            icon: FiGlobe,
            description: "Switch between 100+ models including OpenAI, Google, Anthropic, Mistral, local models such as Ollama's.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Flow-state UX",
            icon: FiSmartphone,
            description:
              "Designed for flow-state, productivity. Fast, reliable, and focused.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Private",
            icon: FiShield,
            description:
              "Chats are stored in your own browser. It's mean that we are not collecting your secret keys.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Advanced Fun",
            icon: FiSmile,
            description:
              "TTS · mobile UI · voice UI · generate image · plugins · agents · plot diagrams.",
            iconPosition: "left",
            delay: 1.1,
          },
          {
            title: "With Agents",
            icon: FiUserCheck,
            description:
              "Engage with diverse AI experts. Clone new ones from YouTube Videos. Because one size fits nobody.",
            iconPosition: "left",
            delay: 1.1,
          },
          {
            title: "and Other",
            icon: FiNavigation,
            description:
              "Use plugins for multi-step reasoning or real-time data, Dall-e to draw images, agents to help you with prompt, and more.",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("https://cleek.id");

  return (
    <Highlights pt="2">
      <HighlightsItem colSpan={[1, null, 2]} title="Chat, Custom & Share.">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Easier way to chat, custom, and share your AI chats & Agents. Use one tool to chat, and use as you want at your own infrastructure.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: "gray.900" }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                Share
              </Text>{" "}
              <Text color="cyan.300" display="inline">
                https://cleek.id
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
          We don&apos;t like to re-invent the wheel, neither should you. We
          selected the most productive and established tools in the scene and
          build AI services on top of it.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Superhero Developer"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “It‘s clear this has been a labor of love, and stands head and shoulders above similar projects out there.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Start your next idea two steps ahead"
      >
        <Text color="muted" fontSize="lg">
          We took care of all your AI models needs, so you can start
          typing functionality that makes your result unique.
        </Text>
        <Wrap mt="8">
          {[
            "openai",
            "gemini",
            "groq",
            "mistral",
            "perplexity",
            "azure",
            "anthropic",
            "agent",
            "TTS (Text to Speech)",
            "documentation",
            "plugin",
            "theming",
            "upselling",
            "responsiveness",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: " 🚀 News: Cleek now supports google Gemini Pro!",
        description:
          '',
        href: "/posts/cleek-support-gemini-pro",
        action: false,
      },
    },
  };
}
