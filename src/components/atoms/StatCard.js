import { Card, Statistic } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const StatCard = ({ title, value, prefix, trend, percent }) => {
  return (
    <Card bordered={false} className="shadow rounded-lg">
      <Statistic
        title={title}
        value={value}
        prefix={prefix}
        valueStyle={{ color: trend === "up" ? "green" : "red" }}
        suffix={
          <>
            {trend === "up" ? <ArrowUpOutlined /> : <ArrowDownOutlined />} {percent}%
          </>
        }
      />
    </Card>
  );
};

export default StatCard;
