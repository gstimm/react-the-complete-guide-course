import { useRouter } from 'next/router';

function DetailPage() {
  const router = useRouter();

  const newsID = router.query.slug;

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
