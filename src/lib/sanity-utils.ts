import { groq } from 'next-sanity';
import { client } from '../../sanity/lib/client';
import { type TypedObject } from 'sanity';

interface Article {
  _id: string;
  _createdAt: string;
  title: string;
  content: TypedObject[];
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
