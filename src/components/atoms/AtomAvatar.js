import { Avatar } from "antd";

const AtomAvatar = ({ src, alt, size = 64, shape = "circle" }) => (
  <Avatar size={size} src={src} shape={shape}>
    {!src && (alt || "S")}
  </Avatar>
);

export default AtomAvatar;
