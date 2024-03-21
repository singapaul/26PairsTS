import React, { ReactNode } from "react";

import ThemeToggle from "../ThemeToggle/ThemeToggle";

type BaseLayoutProps = {
  children: ReactNode;
};

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <body className="h-screen w-screen flex flex-col justify-center items-center gap-8">
      {children}
    </body>
  );
};
