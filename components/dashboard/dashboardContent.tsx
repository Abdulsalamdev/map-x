import React from "react";
import { DashMenu } from ".";
import { TextInput } from "@mantine/core";
import { NotificationBing, SearchNormal } from "iconsax-react";
import { Widget } from "../icons/widget";
import Image from "next/image";

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
        <div className="bg-[#FFFFFF] rounded-[30px] px-[16px] py-[10px] flex items-center gap-[16px]">
          <div className=" bg-WHITE-SMOKE flex gap-[5px] items-center px-[15px] py-[7px] rounded-[30px]">
            <SearchNormal size="14" color="#8F9198" />
            <TextInput
              placeholder="Search"
              styles={{
                input: {
                  outline: "none",
                  width: "clamp(150px,17vw,270px)",
                  border: "none",
                  backgroundColor: "#F5F5F6",
                  color: "#8F9198",
                  "::placeholder": {
                    fontSize: "14px",
                  },
                },
              }}
            />
          </div>
          <NotificationBing size="24" color="#8F9198" />
          <Widget />
          <Image src={"/images/profile.png"} alt={""} width={30} height={30} />
        </div>
      </div>
      <div></div>
    </div>
  );
};
2;
