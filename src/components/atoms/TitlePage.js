import { Typography } from "antd";
import Title from "antd/es/typography/Title";

function TitlePage({ label, level }) {
  return (
    <Typography>
      <Title level={level}>{label}</Title>
    </Typography>
  );
}

export default TitlePage;
