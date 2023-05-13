"use client"

import React, { useState } from "react"

import { AuthContext } from "./AuthContext"

const AuthProvider = ({ children }: { children: any }) => {
  const [userType, setUserType] = useState<string>("") // should use useLocalStorage to keep the token in localstorage but as of now that is not working!
  const [authToken, setAuthToken] = useState<string>("token")
  return (
    <AuthContext.Provider value={{ userType, authToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
