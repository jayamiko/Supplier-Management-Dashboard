import { Form, Input } from "antd";

function FieldInput({
  label,
  name,
  type = "text",
  placeholder = "",
  width = "100%",
}) {
  return (
    <Form.Item
      label={label}
      name={name}
      style={{ width: width ?? "100%" }}
      rules={[{ type: type }]}
    >
      <Input placeholder={placeholder} />
    </Form.Item>
  );
}

export default FieldInput;
