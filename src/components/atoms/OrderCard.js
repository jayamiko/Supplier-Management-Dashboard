import { Card, Statistic } from "antd";

const OrderCard = ({ title, value }) => {
  return (
    <Card
      bordered={false}
      className="shadow rounded-lg p-0 border border-black"
      bodyStyle={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Statistic
        title={title}
        value={value}
        valueStyle={{ fontSize: "16px", textAlign: "left" }}
        style={{ textAlign: "left", width: "100%" }}
      />
      <p className="text-xs text-gray-500 mt-1">YoY</p>
    </Card>
  );
};

export default OrderCard;
