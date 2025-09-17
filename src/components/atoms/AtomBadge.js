import { Tag } from "antd";

const AtomBadge = ({ children, color = "green" }) => {
  if (color === "white") {
    return (
      <Tag
        className="rounded-md"
        style={{
          backgroundColor: "white",
          color: "black",
          border: "1px solid #d9d9d9",
        }}
      >
        {children}
      </Tag>
    );
  }

  return (
    <Tag color={color} className="rounded-md">
      {children}
    </Tag>
  );
};

export default AtomBadge;
