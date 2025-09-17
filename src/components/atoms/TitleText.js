import { Typography } from "antd";
import Title from "antd/es/typography/Title";

function TitleText({ label, level, isBold = false }) {
  return (
    <Typography>
      <Title level={level} style={{ fontWeight: isBold ? "bold" : "normal" }}>
        {label}
      </Title>
    </Typography>
  );
}

export default TitleText;
