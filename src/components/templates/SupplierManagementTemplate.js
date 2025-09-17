import { useState } from "react";
import { Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import menuItems from "../../constants/menuItems";

const { Content, Sider } = Layout;

const SupplierManagementTemplate = () => {
  const [selectedKey, setSelectedKey] = useState("dashboard");
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    setSelectedKey(key);
    navigate(`/${key}`);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={300}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <h1 style={{ color: "white", fontSize: "40px", fontWeight: "bold" }}>
            ALISA
          </h1>
        </div>
        <hr />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderInlineEnd: 0 }}
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: "16px" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default SupplierManagementTemplate;
