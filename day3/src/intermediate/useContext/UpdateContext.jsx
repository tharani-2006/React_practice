import React, { useContext } from "react";
import { UserContext } from "./CreateContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h2>Current User: {user}</h2>
      <button onClick={() => setUser("Prakash")}>Change User</button>
    </>
  );
}

export default Profile;
