import { createContext,useSate } from "react";
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useSate("Tharani");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}