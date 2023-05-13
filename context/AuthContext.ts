import { createContext, useContext } from "react"

export type Auth = {
  userType: string
  authToken: string
  setAuthToken: (token: string) => void
}

export const AuthContext = createContext<Auth>({
  userType: "",
  authToken: "token",
  setAuthToken: (token: string) => {},
})
export const useAuthContext = () => useContext(AuthContext)
