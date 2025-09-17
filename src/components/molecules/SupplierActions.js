import { ExportOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";

const SupplierActions = () => {
  return (
    <Space>
      <Button type="primary">
        <ExportOutlined />
        Export
      </Button>
      <MenuOutlined />
    </Space>
  );
};

export default SupplierActions;
