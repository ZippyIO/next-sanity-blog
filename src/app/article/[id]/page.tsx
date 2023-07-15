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
    <main className="flex min-h-screen w-full flex-col items-center pt-8">
      <article className="">
        <div className="mb-2">
          <p className="text-sm font-bold text-red-400">
            {format(parseISO(article._createdAt), 'dd/MM/yyyy')}
          </p>
          <h1 className="bg-gradient-to-r from-sky-500 via-violet-600 to-indigo-500 bg-clip-text pb-2 text-5xl font-bold text-transparent">
            {article.title}
          </h1>
        </div>
        <div className="mb-2 border-b-2 border-zinc-300" />
        <ArticlePortableText block={article.content} />
      </article>
    </main>
  );
};

export default ArticlePage;
