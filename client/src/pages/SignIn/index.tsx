import { CardContent } from "@mui/material";
import { Button, Card, CardFooter, CardHeader, Input } from "@nextui-org/react";
import { useSigninMutation } from "services/LoginApi";

const SignIn = () => {
  const [login] = useSigninMutation();

  const signIn = async () => {
    const resp = await login({ username: "ADMIN", password: "ADMIN" }).unwrap();
    console.log("signin : ", resp);
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Card className="max-w-[640] w-[640]">
        <CardHeader>Sign in</CardHeader>
        <CardContent className="gap-2">
          <Input placeholder="username" className="my-1" />
          <Input placeholder="password" />
        </CardContent>
        <CardFooter className="flex gap-2 justify-end">
          <Button>Clear</Button>
          <Button onClick={signIn}>Sign in</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
