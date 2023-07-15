import { format, parseISO } from 'date-fns';
import Link from 'next/link';

import { getArticles } from '~/lib/sanity-utils';

const Sidebar = async () => {
  const articles = await getArticles();

  return (
    <div className="w-[300px] border-r-4 border-zinc-400 pl-2 pt-4">
      <ul className="flex flex-col gap-2">
        {articles.map((article) => (
          <li
            key={article._id}
            className="flex items-start gap-1 rounded-l-md bg-zinc-100 hover:bg-zinc-200 active:bg-zinc-300"
          >
            <Link
              href={`/article/${article._id}`}
              className="w-full p-2 font-medium leading-none text-blue-500"
            >
              {article.title}
              <br />
              <span className="text-xs text-zinc-500">
                {format(parseISO(article._createdAt), 'dd/MM/yyyy')}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
