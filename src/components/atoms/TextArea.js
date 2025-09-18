import { Input } from "antd";

function TextArea({ rows, placeholder }) {
  return (
    <Input.TextArea
      rows={rows}
      placeholder={placeholder}
      className="border-black"
    />
  );
}

export default TextArea;
