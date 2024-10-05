import { getAllReviews } from '@/lib/getter';
import LinkedBookDetails from '@/components/LinkedBookDetails';

export const dynamic = 'force-dynamic';
export default async function Home() {
  const reviews = await getAllReviews();

  return (
    <>
    <p className="mb-3 text-black text-2xl">Book List</p>
    {
      reviews.length === 0
      ? <p className="text-black">登録されている本はありません。Searchページから本を選んでください。</p>
      : ''
    }
    {reviews.map((b, i) => (
      <LinkedBookDetails book={b} index={i + 1} key={b.id} />
    ))}
    </>
  );
}
