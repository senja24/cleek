import { GetStaticProps } from 'next'

import FeedItem from 'components/FeedItem'
import { getAuthors } from 'pages/api/authors'
import site from 'site.config'

export default function Authors({ authors }: { authors: ObjectWithPosts[] }) {
  return (
      <section>
        {authors.map(
          (author) =>
            author?.posts?.length > 0 && (
              <FeedItem
                key={author.slug}
                title={`${author.title}`}
                link={`/authors/${author.slug}`}
              />
            )
        )}
      </section>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const authors = getAuthors()

  return {
    props: { authors },
  }
}
