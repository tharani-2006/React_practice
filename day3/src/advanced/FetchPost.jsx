import React from 'react'

const FetchPost = () => {

    const handleAddUser = () => {
        fetch("https://jsonplaceholder.typicode.com/users",{
            method : "POST",
            headers : {
                "constent-type" : "application/json"
            },
            body :JSON.stringify({ name: "Tharani", email: "tharani@example.com" })
        })
        .then((response) => response.json())
        .then((data) => console.log("User added:", data))
        .catch((error) => console.error("Error:", error));
  
    };
    return (
        <button onClick={handleAddUser}>   Add user</button>
    )
}

export default FetchPost;
