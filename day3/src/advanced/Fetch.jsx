import React, { useEffect, useState } from "react";



//GET method




function FetchExample() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // API URL
      .then((response) => response.json()) // convert to JSON
      .then((data) => setUsers(data)) // save data to state
      .catch((error) => console.error("Error:", error));
  }, []);

  
  return (
    <div>
      <h2>Users List (Fetch)</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchExample;
