import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import { Container, Box, Heading, Text, Image } from "@chakra-ui/react";
import { SEO } from "components/seo/seo";
import { getPosts, getPostBySlug } from 'pages/api/posts'
import site from 'site.config'

export default function Post({
  post,
  categoryPosts,
}: {
  post: NestedPostObject,
  categoryPosts: NestedPostObject[]
}) {
  const {
    title,
    slug,
    published_at,
    thumbnail,
    excerpt,
    author,
    category,
    tags,
  } = post

  return (
    <Box mt={5}>
      <Container maxW="container.md" pt={{ base: 20, lg: 20 }}>
        <SEO
          title={`${title} - Cleek`}
          description={excerpt}
          openGraph={{
            url: `https://cleek.id/blog/${slug}`,
            title: title,
            description: excerpt,
            images: [
              {
                url: thumbnail,
                width: 800,
                height: 600,
                alt: title,
                type: 'image/jpeg',
              },
              {
                url: thumbnail,
                width: 900,
                height: 800,
                alt: title,
                type: 'image/jpeg',
              },
            ],
            siteName: 'Cleek — Your own AI chat service',
          }}
        />
        <Box as="article" className="post">
          <Box textAlign="center" mb={4}>
            <Heading as="h1">{title}</Heading>
            {published_at && (
              <Box mt={2}>
                <Text as="time" dateTime={published_at} title={published_at}>
                  {published_at}
                </Text>
              </Box>
            )}
          </Box>
          {thumbnail && (
            <Image src={thumbnail} alt={title} borderRadius="md" mb={10} mt={10} />
          )}
          <Box mt={6} mb={6} p={4} borderLeft="4px solid" borderColor="gray.300">
            <Text fontStyle="italic" fontSize="lg">
              {excerpt}
            </Text>
          </Box>
          {post.content && (
            <Box
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          )}
        </Box>
      </Container>
    </Box>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          post: post.slug as string,
          category: (post.category as { [x: string]: unknown }).slug as string,
        },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params

  let post: MarkdownFileObject
  const categoryPosts = []

  if (params?.post) {
    post = getPostBySlug(params.post.toString(), [], true)
  } else {
    post = {}
  }

  return {
    props: {
      post,
      categoryPosts,
    },
  }
}
