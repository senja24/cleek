import matter from 'gray-matter'
import md from 'markdown-it'
import type { NextApiRequest, NextApiResponse } from 'next'

import fs from 'fs'
import { join } from 'path'


export const postsDirectory = join(process.cwd(), '_content/posts')

export function getPostBySlug(
  slug: string,
  fields: string[] | undefined = undefined,
  nested = false
) {
  const realSlug = slug.replace(/\.md$/, '')

  const fullPath = join(postsDirectory, `${realSlug}.md`)

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const theData: { [x: string]: unknown } = {
    ...data,
    slug: realSlug,
    content: md().render(content),
  }

  if (fields !== undefined && fields.length) {
    const filteredData: { [x: string]: unknown } = { slug: realSlug }

    fields.forEach((field) => {
      if (field !== slug && theData[field]) {
        filteredData[field] = theData[field]
      }
    })

    return filteredData
  }

  return theData
}

export function getPosts(fields: string[] | undefined = undefined) {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const slugs = fs.readdirSync(postsDirectory)

  const content = slugs
    .map((slug) => getPostBySlug(slug, fields, true))
    .sort((a, b) => {
      if (
        a.published_at &&
        b.published_at &&
        typeof a.published_at === 'string' &&
        typeof b.published_at === 'string'
      ) {
        return a.published_at > b.published_at ? -1 : 1
      }

      return 0
    })

  return content
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).end()
  }

  const queryFields = req.query?.fields?.toString()

  const fields = []
  if (queryFields) {
    fields.push(...queryFields.split(','))
  }

  const content = getPosts(fields)
  res.status(200).json(content)
}
