import React, { useContext } from "react";
import { UserContext } from "./CreateContext.jsx";

function UseContext() {
  const { user } = useContext(UserContext);

  return <h1>Welcome, {user}!</h1>;
}

export default UseContext;
