"use client"

import Link from "next/link"
import { useAuthContext } from "@/context/AuthContext"

import { Button } from "./ui/button"

export default function AuthButtons() {
  const { userType, authToken } = useAuthContext()
  return (
    <>
      {userType == "" && (
        <>
          <Link href="/signin">
            <Button>Sign In</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign UP</Button>
          </Link>
        </>
      )}
    </>
  )
}
