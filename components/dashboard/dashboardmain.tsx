import React from "react";
import { SideBar } from "../common";
import { DashboardContent } from ".";

export const Dashboardmain = () => {
  return (
    <div className="flex ">
      <SideBar />
      <div className="grow bg-WHITE-SMOKE pt-[40px] px-[20px] h-[100vh] overflow-y-scroll">
        <DashboardContent />
      </div>
    </div>
  );
};
