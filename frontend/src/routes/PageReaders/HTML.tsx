import { useQuery } from "@tanstack/react-query";
import { getPage } from "../../services/page";
import { useParams } from "react-router";
import ErrorLoadingData from "../../components/ErrorLoadingData";
import { useLocation } from "react-router";
import DOMPurify from "dompurify";
import Loader from "../../components/Loaders/Page";
import PagePagination from "../../components/PagePagination";

const PageReaderHTML = () => {
  const { bookId, pageNumber } = useParams();
  const { pathname } = useLocation();

  const format = pathname.split("/").pop();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["page", Number(bookId), Number(pageNumber), format!],
    queryFn: getPage,
  });

  if (isLoading) return <Loader />;

  if (isError) return <ErrorLoadingData />;

  if (!data) return <div>There is no book to display!</div>;

  const sanitizedContent = DOMPurify.sanitize(data.htmlContent);

  return (
    <>
      <div className="container mx-auto p-5">
        <h2 className="text-2xl">{data.title}</h2>
        <hr className="border-gray-500"></hr>
        <div className="my-4">
          <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
        </div>
        <hr className="border-gray-500"></hr>
      </div>
      <PagePagination
        bookId={Number(bookId)}
        pageNumber={Number(pageNumber)}
        numberOfPages={data.numberOfPages}
        format="html"
      />
    </>
  );
};

export default PageReaderHTML;
