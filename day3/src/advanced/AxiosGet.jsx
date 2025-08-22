import React, { useEffect, useState } from "react";
import axios from "axios";

function AxiosExample() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h2>Posts List (Axios)</h2>
      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default AxiosExample;
