"use client"

import React, { ReactNode, createContext, useContext, useState } from "react"

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
  const [userType, setUserType] = useState<string>("") // should use useLocalStorage to keep the token in localstorage but as of now that is not working!
  const [authToken, setAuthToken] = useState<string>("token")
  return (
    <AuthContext.Provider
      value={{ userType, setUserType, authToken, setAuthToken }}
    >
      {children}
    </AuthContext.Provider>
  )
}
