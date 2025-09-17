import { Tag } from "antd";

const StatusTag = ({ status }) => {
  const colorMap = {
    Active: "green",
    "In Progress": "blue",
    Blocked: "red",
  };

  return <Tag color={colorMap[status] || "default"}>{status}</Tag>;
};

export default StatusTag;
