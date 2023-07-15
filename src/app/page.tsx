import { format, parseISO } from 'date-fns';

import ArticlePortableText from '~/components/ArticlePortableText';
import { getArticles } from '~/lib/sanity-utils';

const HomePage = async () => {
  const articles = await getArticles();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="bg-gradient-to-r from-sky-500 via-violet-600 to-indigo-500 bg-clip-text p-2 text-5xl font-bold text-transparent">
        Next Sanity Blog
      </h1>
      {articles.map((article) => (
        <article key={article._id} className="rounded-md bg-zinc-100 p-4 shadow-md">
          <div className="mb-2">
            <h3 className="text-2xl font-bold">{article.title}</h3>
            <p className="text-xs text-zinc-600">
              {format(parseISO(article._createdAt), 'dd/MM/yyyy')}
            </p>
          </div>
          <ArticlePortableText block={article.content} />
        </article>
      ))}
    </main>
  );
};

export default HomePage;
