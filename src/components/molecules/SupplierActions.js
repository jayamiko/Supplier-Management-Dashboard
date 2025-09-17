import { ExportOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";

const SupplierActions = ({ canExport = true }) => {
  return (
    <Space>
      {!!canExport && (
        <Button type="primary">
          <ExportOutlined />
          Export
        </Button>
      )}
      <MenuOutlined />
    </Space>
  );
};

export default SupplierActions;
