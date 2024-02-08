import React from "react"
import { Link, navigate } from "@reach/router"
import { useAuthValue } from "../Auth/AuthContext";
 
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase";

export default () => {

  const { currentUser } = useAuthValue();

  let details
  if (!currentUser) {
    details = (
      <p className={"mx-auto max-w-[640px] text-right"}>
        To get the full app experience, you’ll need to
        {` `}
        <Link to="/app/login">log in</Link>.
      </p>
    )
  } else {
    details = (
      <p className={"mx-auto max-w-[640px] text-right"}>
        {/* @ts-ignore */}
        Logged in as {currentUser.email}
        {` `}
        <a
          href="/"
          onClick={event => {
            event.preventDefault()
                    {/* @ts-ignore */}
            signOut(auth)
            navigate(`/app/login`)
          }}
        >
          log out
        </a>
      </p>
    )
  }

  return <div className={'bg-gray-200 text-sm p-1'}>{details}</div>
}
