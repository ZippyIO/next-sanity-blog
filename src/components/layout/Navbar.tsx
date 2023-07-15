import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="m-2 flex items-center justify-between rounded-lg bg-slate-900 px-4 py-2 shadow-md">
      <h1 className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-3xl font-bold text-transparent">
        Next Sanity
      </h1>
      <div className="flex gap-6">
        <Link href="/" className="font-medium text-zinc-300">
          Home
        </Link>
        <Link href="/articles" className="font-medium text-zinc-300">
          Articles
        </Link>
        <Link href="/about" className="font-medium text-zinc-300">
          About
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
