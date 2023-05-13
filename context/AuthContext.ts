import { createContext, useContext } from "react"

export type Auth = {
  userType: string
  authToken: string
}

export const AuthContext = createContext<Auth>({
  userType: "",
  authToken: "token",
})
export const useAuthContext = () => useContext(AuthContext)
