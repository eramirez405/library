import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getBooksPaginated } from "../services/book";
import Loader from "../components/Loaders/BookGrid";
import ErrorLoadingData from "../components/ErrorLoadingData";
import BookCard from "../components/BookCard";

const BooksDashboard = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["books", { limit: 15, skip: 0 }],
    queryFn: getBooksPaginated,
    placeholderData: keepPreviousData,
  });

  if (isLoading) return <Loader />;

  if (isError) return <ErrorLoadingData />;

  if (!data || data.length == 0)
    return <div>There are no books to display!</div>;

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
        {data.map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </div>
    </div>
  );
};

export default BooksDashboard;
