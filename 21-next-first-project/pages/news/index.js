import { Link } from 'next/link';

function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-lorem-ipsum">NextJS Lorem Ipsum</Link>
        </li>
        <li>React Lorem Ipsum</li>
      </ul>
    </>
  );
}

export default NewsPage;
