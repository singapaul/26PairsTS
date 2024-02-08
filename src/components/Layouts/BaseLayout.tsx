import React, { ReactNode } from "react";

type BaseLayoutProps = {
  children: ReactNode;
};

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return <body className="h-screen w-screen flex flex-col justify-center items-center gap-8">{children}</body>;
};
