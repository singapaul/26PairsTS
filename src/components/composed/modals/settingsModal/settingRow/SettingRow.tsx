import React from "react";

type SettingRowProps = {
    title: string
  children: React.ReactNode;
};

export const SettingRow = ({ title, children }: SettingRowProps) => {
  return (
    <div className="flex justify-between items-center min-w-64 sm:min-w-80 py-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      {children}
    </div>
  );
};
