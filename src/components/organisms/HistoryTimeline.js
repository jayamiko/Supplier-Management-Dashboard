import { Card, Timeline } from "antd";
import { UserOutlined, MessageOutlined } from "@ant-design/icons";

const HistoryTimeline = ({ history }) => {
  return (
    <Card title="History" className="max-h-64 overflow-y-auto">
      <Timeline mode="left">
        {history.map((item, idx) => (
          <Timeline.Item
            key={idx}
            dot={
              <span className="w-3 h-3 border border-gray-400 rounded-full block" />
            }
          >
            <div className="font-semibold">{item.department}</div>
            <div className="flex items-center text-sm text-gray-600 gap-1">
              <UserOutlined />
              <span className="text-blue-600 underline cursor-pointer text-xs">
                {item.user}
              </span>
              <span className="text-xs">{item.date}</span>
            </div>
            <div className="flex items-start text-gray-500 text-sm mt-1 gap-1">
              <MessageOutlined className="mt-0.5" />
              <span className="text-xs">{item.message}</span>
            </div>
          </Timeline.Item>
        ))}
      </Timeline>
    </Card>
  );
};

export default HistoryTimeline;
