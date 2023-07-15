import { format, parseISO } from 'date-fns';

import ArticlePortableText from '~/components/ArticlePortableText';
import { getArticle } from '~/lib/sanity-utils';

interface Props {
  params: { id: string };
}

const ArticlePage = async ({ params }: Props) => {
  const id = params.id;
  const article = await getArticle(id);

  return (
    <article className="rounded-md bg-zinc-100 p-4 shadow-md">
      <div className="mb-2">
        <h3 className="text-2xl font-bold">{article.title}</h3>
        <p className="text-xs text-zinc-600">
          {format(parseISO(article._createdAt), 'dd/MM/yyyy')}
        </p>
      </div>
      <ArticlePortableText block={article.content} />
    </article>
  );
};

export default ArticlePage;
