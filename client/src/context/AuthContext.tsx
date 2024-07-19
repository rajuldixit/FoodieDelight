import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from "react";

type IUser = {
  name: string;
  password: string;
  username: string;
  role: string;
  email: string;
  accessToken: string;
  refreshToken: string;
};
type IAuthContext = {
  user: IUser;
  setUser: (user: IUser) => void;
};

const AuthContext = createContext<IAuthContext | null>(null);

type AuthProviderProps = PropsWithChildren & {
  user1?: IUser;
  setUser1?: (user: IUser) => void;
};

export const AuthProvider = ({
  children,
  user1,
  setUser1
}: AuthProviderProps) => {
  const [user, setUser] = useState<IUser>(null);
  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (authContext === undefined) {
    throw new Error("Context error");
  }
  return authContext;
};
