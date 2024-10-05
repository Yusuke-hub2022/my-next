import { getAllReviews } from '@/lib/getter';
import LinkedBookDetails from '@/components/LinkedBookDetails';

export const dynamic = 'force-dynamic';
export default async function Home() {
  const reviews = await getAllReviews();
  if (reviews.length === 0) {
    return <p className="text-black">登録されている本はありません。Searchページから本を選んでください。</p>
  }
  return (
    <>
    {reviews.map((b, i) => (
      <LinkedBookDetails book={b} index={i + 1} key={b.id} />
    ))}
    </>
  );
}
