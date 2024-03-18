import React, { useState } from "react";
import { Mapx } from "../icons/mapx";
import { useRouter } from "next/router";
import {
  Barcode,
  Map,
  DirectboxSend,
  Element2,
  People,
  Logout,
  Profile,
  ArrowLeft2,
} from "iconsax-react";
import Link from "next/link";
import { Tooltip } from "@mantine/core";

export const SideBar = () => {
  const { pathname } = useRouter();
  const [toggle, setToggle] = useState(false);
  const side1 = [
    {
      name: "Dashboard",
      icon: <Element2 size="22" color="#FFFFFF" variant="Bold" />,
      link: "/dashboard",
    },
    {
      name: "Farmers",
      icon: <People size="22" color="#FFFFFF" variant="Bold" />,
      link: "#",
    },
    {
      name: "Mapping",
      icon: <Map size="22" color="#FFFFFF" variant="Bold" />,
      link: "#",
    },
    {
      name: "FEOs",
      icon: <DirectboxSend size="22" color="#FFFFFF" variant="Bold" />,
      link: "#",
    },
    {
      name: "Activity log",
      icon: <Barcode size="22" color="#FFFFFF" variant="Bold" />,
      link: "#",
    },
  ];
  const side2 = [
    {
      name: "Profile",
      icon: <Profile size="22" color="#FFFFFF" variant="Bold" />,
      link: "#",
    },
    {
      name: "Logout",
      icon: <Logout size="22" color="#FFFFFF" variant="Bold" />,
      link: "/login",
    },
  ];
  return (
    <div className="px-[16px] py-[40px] bg-BLOOD-ORGAN h-[100vh] flex flex-col justify-between transition duration-700 ease-in items-center">
      <div>
        <div className="flex gap-[10px] items-center font-bold font-Montserrat pb-[40px] relative">
          <Mapx />{" "}
          <span
            className={`text-[#FFFFFF] text-[24px] ${
              toggle === true ? " hidden" : "block"
            } `}
          >
            MapX
          </span>
          <div
            className={`absolute bg-white p-[6px] rounded-[8px] right-[-27px] ${
              toggle === true ? "rotate-180 " : null
            }`}
            onClick={() => setToggle(!toggle)}
          >
            <ArrowLeft2 size="12" color="#000000" />
          </div>
        </div>
        <div className="flex flex-col gap-[1px] ">
          {side1.map((item, index) => (
            <Tooltip
              label={item.name}
              position="right"
              color="#BF2018"
              offset={21}
            >
              <Link
                href={item.link}
                key={index}
                className={`flex items-center gap-[10px] p-[16px] ${
                  pathname === item.link
                    ? " bg-RED-INFERNO rounded-[6px]"
                    : null
                }`}
              >
                {item.icon}

                <span
                  className={`text-[#FFFFFF] text-[16px] font-switzer font-normal  ${
                    toggle === true ? " hidden" : "block"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            </Tooltip>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[1px] ">
        {side2.map((item, index) => (
          <Tooltip
            label={item.name}
            position="right"
            color="#BF2018"
            offset={21}
          >
            <Link
              href={item.link}
              key={index}
              className={`flex items-center gap-[10px] p-[16px] ${
                pathname === item.link ? "bg-RED-INFERNO rounded-[6px] " : null
              }`}
            >
              {item.icon}

              <span
                className={`text-[#FFFFFF] text-[16px] font-switzer font-normal  ${
                  toggle === true ? " hidden" : "block"
                }`}
              >
                {item.name}
              </span>
            </Link>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
