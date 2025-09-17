import { Card, Row } from "antd";
import TitleText from "./TitleText";

function ReviewCard({ title }) {
  return (
    <Card bordered={false} className="shadow rounded-lg">
      <Row justify="space-between" align="middle" className="w-full">
        <TitleText label={title} level={5} />

        <span
          style={{
            backgroundColor: "#999",
            color: "white",
            fontWeight: "bold",
            borderRadius: "50%",
            width: 28,
            height: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          1
        </span>
      </Row>
    </Card>
  );
}

export default ReviewCard;
