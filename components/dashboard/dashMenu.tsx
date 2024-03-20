import { Menu } from "@mantine/core";
import React from "react";

export const DashMenu = () => {
  return (
    <div>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <div>hello</div>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Settings</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};
