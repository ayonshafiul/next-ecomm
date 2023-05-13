"use client"

import React, { ReactNode, createContext, useContext, useState } from "react"
import { useLocalStorage } from "usehooks-ts"

export type Auth = {
  userType: string
  setUserType: (s: string) => void
  setAuthToken: (s: string) => void
  authToken: string
}

export const AuthContext = createContext<Auth>({
  userType: "",
  authToken: "",
  setUserType: () => {},
  setAuthToken: () => {},
})
export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userType, setUserType] = useLocalStorage("userType", "")
  const [authToken, setAuthToken] = useLocalStorage("authToken", "")
  return (
    <AuthContext.Provider
      value={{ userType, setUserType, authToken, setAuthToken }}
    >
      {children}
    </AuthContext.Provider>
  )
}
