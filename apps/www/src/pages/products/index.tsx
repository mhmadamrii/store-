import { useParams, useSearchParams } from 'react-router-dom';

export default function Products() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('search->', searchParams);
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>Welcome to the products page</h1>
      <h1>Products{params.id}</h1>
      <h1>Search params{searchParams.get('q')}</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setSearchParams({ q: 'hello' })}
      >
        Set search params
      </button>
    </div>
  );
}
