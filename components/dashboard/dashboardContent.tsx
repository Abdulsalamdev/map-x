import React from "react";
import { DashMenu } from ".";

export const DashboardContent = () => {
  return (
    <div>
      <div className="flex justify-between gap-[20px] items-center">
        <div className="flex flex-col gap-[5px]">
          <p className="text-[14px] text-PARTRIDGE-GREY font-switzer font-medium">
            Pages/<span className="text-[black]">Dashboard</span>
          </p>
          <div className="flex gap-[8px] items-center">
            <span className="text-[clamp(27px,2vw,32px)] font-semibold font-switzer text-BLACK-HOWL">
              Global Dashboard
            </span>
            <DashMenu />
          </div>
        </div>
      </div>
    </div>
  );
};
