import React, { useEffect, useState } from "react";

const PaginationServer = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  }, [page]);

  return (
    <div>
      <h2>Server-side Pagination</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.first_name} {u.last_name}</li>
        ))}
      </ul>

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default PaginationServer;
