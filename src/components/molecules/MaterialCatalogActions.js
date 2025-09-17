import { ImportOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";

const MaterialCatalogActions = () => {
  return (
    <Space>
      <Button type="primary">
        <ImportOutlined />
        Import
      </Button>
      <Button type="primary" className="!bg-green-500 hover:!bg-green-600">
        ＋ New Material Detail
      </Button>
    </Space>
  );
};

export default MaterialCatalogActions;
