import { useState } from "react";
import { Layout, Menu } from "antd";
import SupplierList from "../organisms/SupplierList";
import menuItems from "../../constants/menuItems";
import ReviewAndApproval from "../organisms/ReviewAndApproval";
import Configurations from "../organisms/Configurations";

const { Content, Sider } = Layout;

const SupplierManagementTemplate = () => {
  const [selectedKey, setSelectedKey] = useState("dashboard");

  const renderContent = () => {
    switch (selectedKey) {
      case "supplier-list":
        return <SupplierList />;
      case "supplier-dashboard":
        return <h2>Supplier Dashboard</h2>;
      case "supplier-review":
        return <ReviewAndApproval />;
      case "supplier-config":
        return <Configurations />;
      case "funnel-overview":
        return <h2>Funnel Overview</h2>;
      case "funnel-reports":
        return <h2>Funnel Reports</h2>;
      default:
        return <h2>Dashboard</h2>;
    }
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
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderInlineEnd: 0 }}
          items={menuItems}
          onClick={({ key }) => setSelectedKey(key)}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: "16px" }}>
          <Content style={{ margin: "16px" }}>{renderContent()}</Content>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SupplierManagementTemplate;
