import React from "react";
import { Link } from "react-router-dom";

function Home({ posts }) {
  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default Home;
