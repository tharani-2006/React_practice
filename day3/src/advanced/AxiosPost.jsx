import axios from "axios";

function AddPost() {
  const handleAddPost = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "New Post",
        body: "This is a new post",
        userId: 1,
      })
      .then((response) => console.log("Post Added:", response.data))
      .catch((error) => console.error("Error:", error));
  };

  return <button onClick={handleAddPost}>Add Post</button>;
}

export default AddPost;
