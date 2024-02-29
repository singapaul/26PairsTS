import React from "react";
// @ts-ignore
import { ThemeToggler } from "gatsby-plugin-dark-mode";

import { Switch } from "../ui/switch";

type ThemeTogglerChildProps = {
  theme: "light" | "dark" | null; // Including null since you're checking for it
  toggleTheme: (theme: "light" | "dark") => void; // More specific type for toggleTheme
};
export default function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }: ThemeTogglerChildProps) => {
        if (theme == null) return null;
        return (
          <>
            <Switch
              checked={theme === "dark"}
              onCheckedChange={(e) =>
                toggleTheme(e.valueOf() ? "dark" : "light")
              }
            />
          </>
        );
      }}
    </ThemeToggler>
  );
}
