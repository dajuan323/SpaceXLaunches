import React from "react";
import { Pagination } from "react-bootstrap";

function LaunchPagination(props) {
  const { currentPage, onPageChange, totalPages } = props;
  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
    return pageNumbers;
  };
  return (
    <Pagination>
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      />
      {renderPageNumbers()}
      <Pagination.Next
        disabled={currentPage === 5}
        onClick={() => handlePageChange(currentPage + 1)}
      />
    </Pagination>
  );
}
export default LaunchPagination;
