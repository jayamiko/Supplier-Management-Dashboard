import { Dropdown, Space, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const DropdownInput = ({ items }) => (
  <Dropdown
    menu={{ items, onClick: ({ key }) => console.log("Clicked:", key) }}
    placement="bottomLeft"
  >
    <Button>
      <Space>
        {items[0].label}
        <DownOutlined />
      </Space>
    </Button>
  </Dropdown>
);

export default DropdownInput;
