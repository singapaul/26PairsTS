import React from "react";
import View from "./View";
import { ref, set, get } from "firebase/database";
import { useAuthValue } from "./Auth/AuthContext";
import { signOut } from "firebase/auth";
// @ts-ignore
import { auth, db } from "./Firebase/Firebase";
import { navigate } from "gatsby";
import { Button } from "./ui/button";
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


  const handleSignOut = async () => {
    // @ts-ignore
    signOut(auth)
    navigate('/app/')
  }

  return (
    <View title="Your Profile">
      {/* @ts-ignore */}
      <p>Welcome back to your profile, {currentUser.email}!</p>
      <p className="">
        This is a client-only route. You could set up a form to save information
        about a user here.
      </p>

      <Button onClick={
        handleSignOut
      }>Sign out</Button>
    </View>
  );
};

export default Profile;
