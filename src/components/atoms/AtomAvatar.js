import { Avatar } from "antd";

const AtomAvatar = ({ src, alt, size = 64 }) => (
  <Avatar size={size} src={src}>
    {!src && (alt || "S")}
  </Avatar>
);

export default AtomAvatar;
