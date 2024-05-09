import React from "react";
 
type StreakContainerProps = {
 streak: number
};

export const StreakContainer = ({streak =79}: StreakContainerProps) => {
 
  return (
    <div className="flex items-center gap-4">
        <h4 className="text-base font-bold">Your Streak: {streak} 🔥</h4>
    </div>
  );
};

 
