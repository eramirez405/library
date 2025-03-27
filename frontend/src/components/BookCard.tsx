import { Book } from "../services/book";
import { Link } from "react-router";

const BookCard = ({ title, cover, description, id, authorName }: Book) => {
  return (
    <Link
      className="max-w-sm w-full min-h-130 border rounded-lg shadow-sm bg-gray-800 border-gray-700 flex flex-col"
      to={`/book/${id}`}
    >
      <img
        className="rounded-t-lg w-full max-h-80 object-contain"
        src={cover}
        alt=""
      />
      <div className="p-5 flex flex-col flex-1">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-400">{description}</p>
        <div className="flex justify-between items-center mt-auto">
          <div className="text-white italic">{authorName}</div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
