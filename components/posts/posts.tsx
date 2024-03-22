'use client'

import {
    Box,
    Stack,
    Image,
    Text,
    useColorModeValue,
    Container,
    VStack,
    Flex,
    Link,
} from '@chakra-ui/react'
import { Hero } from "components/hero";

interface AllPostProps {
    posts: NestedPostObject[];
}

export function AllPost({ posts }: AllPostProps) {
    return (
        <Box position="relative" overflow="hidden">
            {posts.map((post, i) => (
                <Stack key={i} direction={{ base: "column", lg: "row" }} alignItems="center" spacing={8}>
                    <Box
                        height={{ base: "auto", lg: "400px" }}
                        width={{ base: '100%', sm: '90%', lg: '50%' }}
                        position="relative"
                        order={{ base: 1, lg: i % 2 === 0 ? 2 : 1 }}
                    >
                        <Box overflow="hidden" height="100%">
                            <Image
                                borderRadius="lg"
                                src={post.thumbnail}
                                alt={post.title}
                                objectFit="contain"
                                width="100%"
                                height="100%"
                            />
                        </Box>
                    </Box>

                    <Flex order={{ base: 2, lg: i % 2 === 0 ? 1 : 2 }} alignItems="center">
                        <Container>
                            <VStack spacing={[4, null, 8]} alignItems="flex-start">
                                <Text as={Link} href={`/blog/${post.slug}`} textStyle={{ base: 'h2', lg: 'h1' }} textAlign="left">
                                    {post.title}
                                </Text>
                                <Text
                                    as="div"
                                    textStyle="subtitle"
                                    align="left"
                                    color="gray.500"
                                    _dark={{ color: 'gray.400' }}
                                >
                                    {post.excerpt}
                                </Text>
                            </VStack>
                        </Container>
                    </Flex>
                </Stack>
            ))}
        </Box>
    )
}