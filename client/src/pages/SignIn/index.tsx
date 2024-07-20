import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input
} from "@nextui-org/react";
import { useSigninMutation } from "services/LoginApi";
import { useAuth } from "context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [login] = useSigninMutation();
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const signIn = async () => {
    const resp = await login({ username: "USER", password: "USER" }).unwrap();
    const obj = {
      accessToken: resp.data.accessToken,
      refreshToken: resp.data.refreshToken,
      name: resp.data.user.name,
      email: resp.data.user.email,
      password: resp.data.user.password,
      username: resp.data.user.username,
      role: resp.data.user.role
    };
    localStorage.setItem("user", JSON.stringify(obj));
    setUser(obj);
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Card className="max-w-[640] w-[640]">
        <CardHeader>Sign in</CardHeader>
        <CardBody className="gap-2">
          <Input placeholder="username" className="my-1" />
          <Input placeholder="password" />
        </CardBody>
        <CardFooter className="flex gap-2 justify-end">
          <Button>Clear</Button>
          <Button onClick={signIn}>Sign in</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
