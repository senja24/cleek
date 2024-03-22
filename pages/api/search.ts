import type { NextApiRequest, NextApiResponse } from 'next';

import { getPosts } from './posts';

interface SearchResult {
  type: string;
  author: string;
  category: string;
  tags: string[];
  // Add other required properties here
  [x: string]: unknown;
}

export function getSearch(fields: string[] | undefined = undefined) {
  const content: SearchResult[] = [];

  function processData(
    func: (fields: string[] | undefined) => { [x: string]: unknown }[],
    type: 'post'
  ) {
    const getData = func(['excerpt']);

    for (let i = 0; i < getData.length; i++) {
      const element = getData[i];

      const searchResult: SearchResult = {
        type,
        author: element.author as string,
        category: element.category as string,
        tags: element.tags as string[],
        // Add other required properties here
        ...element,
      };

      content.push(searchResult);
    }
  }

  if (!fields || fields.length === 0) {
    processData(getPosts, 'post');
  } else {
    if (fields.includes('post')) processData(getPosts, 'post');
  }

  return content;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).end();
  }

  const queryFields = req.query?.fields?.toString().split(',');

  const content = getSearch(queryFields);

  res.status(200).json(content);
}