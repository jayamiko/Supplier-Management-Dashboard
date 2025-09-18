import { Layout, Menu } from "antd";
import { UserOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Sider } = Layout;

const Sidebar = ({ menuItems, username, onMenuClick }) => {
  const [selectedKey, setSelectedKey] = useState("");

  const handleClick = (e) => {
    setSelectedKey(e.key);
    if (onMenuClick) onMenuClick(e);
  };

  return (
    <Sider width={250} theme="dark" className="flex flex-col h-3/4">
      <div className="flex flex-col h-full">
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          defaultOpenKeys={["sub1"]}
          style={{ flex: 1, borderInlineEnd: 0, overflow: "auto" }}
          items={menuItems}
          onClick={handleClick}
        />

        <div className="mt-auto p-4 border-t border-gray-700">
          <Menu
            theme="dark"
            mode="inline"
            selectable={false}
            items={[
              {
                key: "help",
                icon: <QuestionCircleOutlined />,
                label: "Help & Support",
                onClick: () => console.log("Help clicked"),
              },
              {
                key: "user",
                icon: <UserOutlined />,
                label: username,
              },
            ]}
          />
        </div>
      </div>
    </Sider>
  );
};

export default Sidebar;
