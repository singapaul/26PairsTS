/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-lone-blocks */
import React from "react";
import { signOut } from "firebase/auth";

import { Link, navigate } from "@reach/router";

import { useAuthValue } from "../Auth/AuthContext";
import { auth } from "../Firebase/Firebase";

export default () => {
  const { currentUser } = useAuthValue();

  const handleSignOut = () => {
        /* @ts-ignore */
    signOut(auth);
    navigate('/');
  }
  let details;
  if (!currentUser) {
    details = (
      <p className={"text-pink dark:text-red mx-auto max-w-[640px] text-right"}>
        To get the full app experience, you’ll need to
        {` `}
        <Link to="/login">log in</Link>.
      </p>
    );
  } else {
    details = (
      <p className={"mx-auto max-w-[640px] text-right"}>
        {/* @ts-ignore */}
        Logged in as {currentUser.email}
        {` `}
         
        <button onClick={handleSignOut}>log out</button>
      </p>
    );
  }

  return <div className={"bg-gray-200 text-sm p-1"}>{details}</div>;
};
