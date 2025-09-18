import { Input as AntInput } from "antd";

const Input = ({ placeholder, value, onChange }) => {
  return (
    <AntInput
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-md"
    />
  );
};

export default Input;
