import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
import { getBook } from "../services/book";
import Loader from "../components/Loaders/BookDetail";
import ErrorLoadingData from "../components/ErrorLoadingData";
import { format } from "date-fns";

const BookDetails = () => {
  const { bookId } = useParams();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["book", Number(bookId)],
    queryFn: getBook,
  });

  if (isLoading) return <Loader />;

  if (isError) return <ErrorLoadingData />;

  if (!data) return <div>There is no book to display!</div>;

  return (
    <div className="p-5 max-w-screen-xl mx-auto">
      <div className="flex flex-col-reverse sm:flex-row w-full gap-5 sm:gap-0">
        <div className="basis-1/2">
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">
            {data.title}
          </h2>

          <dl className="max-w-md text-gray-900 divide-y divide-gray-200">
            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-lg">Author</dt>
              <dd className="text-lg font-semibold">{data.authorName}</dd>
            </div>
            <div className="flex flex-col py-3">
              <dt className="mb-1 text-gray-500 md:text-lg">Description</dt>
              <dd className="text-lg font-semibold">{data.description}</dd>
            </div>
            <div className="flex flex-col pt-3">
              <dt className="mb-1 text-gray-500 md:text-lg">Pages</dt>
              <dd className="text-lg font-semibold">{data.pagesNumber}</dd>
            </div>
            <div className="flex flex-col pt-3">
              <dt className="mb-1 text-gray-500 md:text-lg">Publisher</dt>
              <dd className="text-lg font-semibold">{data.publisher}</dd>
            </div>
            <div className="flex flex-col pt-3">
              <dt className="mb-1 text-gray-500 md:text-lg">Published on</dt>
              <dd className="text-lg font-semibold">
                {format(data.publishDate, "MMMM do y")}
              </dd>
            </div>
          </dl>
          <div className="my-6">
            <Link
              to={`page/${1}/html`}
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-950 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2"
            >
              Read as web
            </Link>
            <Link
              to={`page/${1}/plainText`}
              type="button"
              className="text-white bg-blue-900 hover:bg-blue-950 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2"
            >
              Read as text
            </Link>
          </div>
        </div>
        <div className="basis-1/2 flex justify-center">
          <img className="w-96 object-cover" src={data.cover} />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
