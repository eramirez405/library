import { Link } from "react-router";

type Props = {
  bookId: number;
  pageNumber: number;
  numberOfPages: number;
  format: "html" | "plainText";
};

const PagePagination = ({
  bookId,
  pageNumber,
  format,
  numberOfPages,
}: Props) => {
  return (
    <div className="flex justify-center mt-2 fixed bottom-5 w-full">
      <div className="inline-flex rounded-md shadow-xs" role="group">
        <Link
          to={`/book/${bookId}/page/${Number(pageNumber) - 1}/${format}`}
          type="button"
          className={`min-w-30 px-4 py-2 text-sm font-medium border rounded-s-lg bg-gray-800 border-gray-700 text-white hover:text-white hover:bg-gray-700 focus:ring-blue-500 focus:text-white ${
            pageNumber === 1 ? "pointer-events-none opacity-80" : ""
          }`}
        >
          Previous
        </Link>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium border-t border-b bg-gray-800 border-gray-700 text-white hover:text-white hover:bg-gray-700 focus:ring-blue-500 focus:text-white"
        >
          {pageNumber} / {numberOfPages}
        </button>
        <Link
          to={`/book/${bookId}/page/${Number(pageNumber) + 1}/${format}`}
          type="button"
          className={`min-w-30 px-4 py-2 text-sm text-right font-medium border rounded-e-lg bg-gray-800 border-gray-700 text-white hover:text-white hover:bg-gray-700 focus:ring-blue-500 focus:text-white ${
            pageNumber === numberOfPages ? "pointer-events-none opacity-80" : ""
          }`}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default PagePagination;
