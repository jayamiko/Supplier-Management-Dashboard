import { Button } from "antd";

const AtomButton = ({ children, size = "middle", ...rest }) => (
  <Button size={size} {...rest} />
);

export default AtomButton;
