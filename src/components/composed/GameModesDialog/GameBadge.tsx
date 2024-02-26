import React, { ReactElement, ReactNode } from "react";

type GameBadgeProps = {
  icon: ReactNode | ReactElement;
  text: string | number;
};

export const GameBadge = ({ icon, text }: GameBadgeProps) => {
  return (
    <div className="flex w-full gap-1 items-center">
      {icon}
      <p className="whitespace-nowrap">{text}</p>
    </div>
  );
};

