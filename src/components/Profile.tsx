import React from "react";
import View from "./View";
import { ref, set, get } from "firebase/database";
import { useAuthValue } from "./Auth/AuthContext";
import { signOut } from "firebase/auth";
// @ts-ignore
import { auth, db } from "./Firebase/Firebase";
const Profile = () => {
  const { currentUser } = useAuthValue();

  const handleClick = async () => {
    console.log(currentUser);
    // @ts-ignore
    set(ref(db, "users"), {
      name: "jack",
    });
    // @ts-ignore
    // const res = await get(ref(db, 'users'))
    // console.log(res)
  };

  return (
    <View title="Your Profile">
      {/* @ts-ignore */}
      <p>Welcome back to your profile, {currentUser.email}!</p>
      <p className="">
        This is a client-only route. You could set up a form to save information
        about a user here.
      </p>

      <button onClick={handleClick}>Press me</button>
      {/* @ts-ignore */}
      <span onClick={() => signOut(auth)}>Sign Out</span>
    </View>
  );
};

export default Profile;
