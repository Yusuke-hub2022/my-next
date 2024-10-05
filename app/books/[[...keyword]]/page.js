import LinkedBookDetails from "@/components/LinkedBookDetails";
import { getBooksByKeyword } from '@/lib/getter';

export default async function BookResult({ params: { keyword = 'React' } }) {
  const books = await getBooksByKeyword(keyword);
  //console.log(books[0]);

  return (
    <>
    {books.map((b, i) => (
      <LinkedBookDetails index={i + 1} book={b} key={b.id} />
    ))}
    </>
  );
}