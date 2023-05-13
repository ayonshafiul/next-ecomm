"use client"

import Link from "next/link"
import { useAuthContext } from "@/context/AuthContext"

import { Button } from "./ui/button"

export default function AuthButtons() {
  const { authToken, setAuthToken } = useAuthContext()
  return (
    <>
      {authToken == "" && (
        <div className="m-2 flex flex-row gap-2">
          <Link href="/signin">
            <Button>Sign In</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      )}
      {authToken != "" && (
        <div className="m-2 flex flex-row gap-2">
          <Button onClick={() => setAuthToken("")}>Sign out</Button>
        </div>
      )}
    </>
  )
}
