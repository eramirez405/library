import { Routes, Route, BrowserRouter as Router } from "react-router";
import BooksDashboard from "./BooksDashboard";
import BookDetails from "./BookDetails";
import PageReaderHTML from "./PageReaders/HTML";
import PageReaderPlainText from "./PageReaders/PlainText";
import NotFound from "./NotFound";
import NavBar from "../components/NavBar";

const RouterComponent = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index element={<BooksDashboard />} />
        <Route path="book/:bookId" element={<BookDetails />} />
        <Route
          path="book/:bookId/page/:pageNumber/html"
          element={<PageReaderHTML />}
        />
        <Route
          path="book/:bookId/page/:pageNumber/plainText"
          element={<PageReaderPlainText />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
