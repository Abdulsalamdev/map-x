import React from "react";
import { Menu } from "@mantine/core";
import Image from "next/image";
export const Widget = () => {
  return (
    <div>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Image src={"/images/Widget.png"} alt={""} width={20} height={40} />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Settings</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};
