import { Card, Statistic } from "antd";
import { FallOutlined, LineChartOutlined } from "@ant-design/icons";

const StatCard = ({ title, value, prefix, trend, percent, rightIcon }) => {
  return (
    <Card
      bordered={false}
      className="shadow rounded-lg p-0"
      bodyStyle={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <Statistic
          title={title}
          value={value}
          prefix={prefix}
          valueStyle={{ fontSize: "16px" }}
        />
        <p
          className={`text-xs ${
            trend === "up" ? "text-green-500" : "text-red-500"
          } mt-1`}
        >
          {trend === "up" ? <LineChartOutlined /> : <FallOutlined />} {percent}%
          vs last year
        </p>
      </div>

      <div className="text-2xl text-gray-400">{rightIcon}</div>
    </Card>
  );
};

export default StatCard;
