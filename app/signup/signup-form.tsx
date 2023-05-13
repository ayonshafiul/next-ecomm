"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUpForm() {
  return (
    <>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Sign up for a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Email" type="email" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="Phone" type="tel" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Password" type="password" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="rpassword">Repeat Password</Label>
              <Input
                id="rpassword"
                placeholder="Repeat Password"
                type="password"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full">Sign Up</Button>

          <Link href="/signin" className="w-full">
            <Button className="w-full" variant="ghost">
              Sign In
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  )
}
