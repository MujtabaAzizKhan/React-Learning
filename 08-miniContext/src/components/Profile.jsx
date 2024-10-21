import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please login clown</div>;
  return <div>Welcome Senor {user.username}!</div>;
}

export default Profile;
