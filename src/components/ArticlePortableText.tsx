import { PortableText } from '@portabletext/react';

import { type TypedObject } from 'sanity';

interface Props {
  block: TypedObject[];
}

const ArticlePortableText = ({ block }: Props) => (
  <div className="max-w-prose space-y-4 text-zinc-700">
    <PortableText value={block} />
  </div>
);

export default ArticlePortableText;
