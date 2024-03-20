import { Menu } from "@mantine/core";
import { ArrowDown2, Global } from "iconsax-react";
import React from "react";

export const DashMenu = () => {
  return (
    <div>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <div className="flex items-center gap-[10px] border-solid border-[1px] border-CUMBERLAND-FOG px-[12px] py-[8px] rounded-[8px] bg-[#FFFFFF]">
            <Global size="22" color="#4A4C58" variant="Bold" />
            <ArrowDown2 size="22" color="#4A4C58" />
          </div>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Settings</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};
