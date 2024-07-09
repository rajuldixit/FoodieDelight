import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        themes={["light-theme", "dark", "app-theme"]}
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default ThemeProvider;
