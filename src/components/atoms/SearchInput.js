import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

const SearchInput = ({ placeholder, onSearch }) => {
  return (
    <Input
      placeholder={placeholder}
      onSearch={onSearch}
      allowClear
      style={{ width: 300 }}
      prefix={<SearchOutlined />}
    />
  );
};

export default SearchInput;
