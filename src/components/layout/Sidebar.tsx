import { format, parseISO } from 'date-fns';
import Link from 'next/link';

import { getArticles } from '~/lib/sanity-utils';

const Sidebar = async () => {
  const articles = await getArticles();

  return (
    <div className="ml-3 flex w-[300px] flex-col gap-2 border-r-2 border-zinc-400">
      {articles.map((article) => (
        <div key={article._id} className="flex items-start gap-1">
          <Link href={`/article/${article._id}`} className="font-medium leading-none text-blue-500">
            {article.title}
            <br />
            <span className="text-xs">{format(parseISO(article._createdAt), 'dd/MM/yyyy')}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
