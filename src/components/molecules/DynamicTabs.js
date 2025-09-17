import { useState } from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const DynamicTabs = ({ tabItems }) => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <Tabs activeKey={activeKey} onChange={setActiveKey} type="card">
      {tabItems.map((tab) => (
        <TabPane tab={tab.label} key={tab.key}>
          {tab.content}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default DynamicTabs;
