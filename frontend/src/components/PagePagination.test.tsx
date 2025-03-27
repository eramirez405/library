import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import PagePagination from "./PagePagination";

describe("PagePagination", () => {
  it("renders the component with the correct props", () => {
    render(
      <MemoryRouter>
        <PagePagination
          bookId={1}
          pageNumber={2}
          numberOfPages={5}
          format="html"
        />
      </MemoryRouter>
    );

    expect(screen.getByText("Previous")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getByText("2 / 5")).toBeInTheDocument();
  });

  it('disables the "Previous" button when on the first page', () => {
    render(
      <MemoryRouter>
        <PagePagination
          bookId={1}
          pageNumber={1}
          numberOfPages={5}
          format="html"
        />
      </MemoryRouter>
    );

    const previousButton = screen.getByText("Previous");
    expect(previousButton).toHaveClass("pointer-events-none opacity-80");
  });

  it('disables the "Next" button when on the last page', () => {
    render(
      <MemoryRouter>
        <PagePagination
          bookId={1}
          pageNumber={5}
          numberOfPages={5}
          format="html"
        />
      </MemoryRouter>
    );

    const nextButton = screen.getByText("Next");
    expect(nextButton).toHaveClass("pointer-events-none opacity-80");
  });

  it('navigates to the correct URLs for "Previous" and "Next" buttons', () => {
    render(
      <MemoryRouter>
        <PagePagination
          bookId={1}
          pageNumber={2}
          numberOfPages={5}
          format="html"
        />
      </MemoryRouter>
    );

    const previousButton = screen.getByText("Previous");
    const nextButton = screen.getByText("Next");

    expect(previousButton.closest("a")).toHaveAttribute(
      "href",
      "/book/1/page/1/html"
    );

    expect(nextButton.closest("a")).toHaveAttribute(
      "href",
      "/book/1/page/3/html"
    );
  });

  it("uses the correct format in the navigation URLs", () => {
    render(
      <MemoryRouter>
        <PagePagination
          bookId={1}
          pageNumber={2}
          numberOfPages={5}
          format="plainText"
        />
      </MemoryRouter>
    );

    const previousButton = screen.getByText("Previous");
    const nextButton = screen.getByText("Next");

    expect(previousButton.closest("a")).toHaveAttribute(
      "href",
      "/book/1/page/1/plainText"
    );

    expect(nextButton.closest("a")).toHaveAttribute(
      "href",
      "/book/1/page/3/plainText"
    );
  });
});
