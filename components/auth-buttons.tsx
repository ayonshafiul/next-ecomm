"use client"

import Link from "next/link"
import { useAuthContext } from "@/context/AuthContext"

import Cart from "./cart"
import { Button } from "./ui/button"

export default function AuthButtons() {
  const { authToken } = useAuthContext()
  return (
    <>
      {authToken == "" && (
        <>
          <Link href="/signin">
            <Button>Sign In</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign UP</Button>
          </Link>
        </>
      )}

      {authToken != "" && (
        <>
          <Cart />
        </>
      )}
    </>
  )
}
