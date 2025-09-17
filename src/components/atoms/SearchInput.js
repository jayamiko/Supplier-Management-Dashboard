import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

const SearchInput = ({ placeholder, onSearch }) => {
  return (
    <Input
      placeholder={placeholder}
      onSearch={onSearch}
      allowClear
      className="w-80 rounded-2xl border-black"
      prefix={<SearchOutlined />}
    />
  );
};

export default SearchInput;
