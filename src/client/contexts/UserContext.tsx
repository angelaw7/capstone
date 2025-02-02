import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { auth } from "../firebase";
import { User as FirebaseUser, onAuthStateChanged } from "firebase/auth";

interface User {
  email: string | null;
  firstName: string | null;
  middleName?: string | null;
  lastName: string | null;
  sex: string | null;
  dob: string | null;
  occupation: string | null;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>; // Allow updates from LoginView
  loading: boolean;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  loading: true,
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => useContext(UserContext);
