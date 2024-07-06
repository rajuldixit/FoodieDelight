import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemePicker = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div>
      <p>Theme</p>
      <div className="flex gap-4 items-center">
        <Button
          onClick={() => setTheme("light-theme")}
          variant="flat"
          className="rounded-small"
          isIconOnly
          color="success"
          aria-label="Light"
          style={{ background: "#BEF264" }}
        ></Button>
        <Button
          onClick={() => setTheme("dark")}
          variant="flat"
          className="rounded-small"
          isIconOnly
          style={{ background: "#ff2dce" }}
          aria-label="Dark"
        ></Button>
        <Button
          onClick={() => setTheme("app-theme")}
          variant="flat"
          className="rounded-small"
          isIconOnly
          style={{ background: "#A12CF8" }}
          aria-label="App-Theme"
        ></Button>
      </div>
    </div>
  );
};

export default ThemePicker;
