import { groq } from 'next-sanity';
import { client } from '../../sanity/lib/client';

interface Article {
  _id: string;
  _createdAt: string;
  title: string;
  content: string;
}

export async function getArticles(): Promise<Article[]> {
  return client.fetch(
    groq`*[_type == "article"]{
      _id,
      _createdAt,
      title,
      content,
    }`,
  );
}
