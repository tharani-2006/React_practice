import React, { useState } from "react";

const PaginationClient = () => {
  const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`); // 50 items
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <h2>Client-side Pagination</h2>
      <ul>
        {selectedItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {/* Page buttons */}
      <div>
        {Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginationClient;
