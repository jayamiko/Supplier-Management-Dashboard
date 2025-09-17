import { Tabs } from "antd";

const MoleculeTabs = ({ activeKey, onChange, children }) => (
  <Tabs
    activeKey={activeKey}
    onChange={onChange}
    className="-mx-4 px-4"
    type="card"
  >
    {children}
  </Tabs>
);

export default MoleculeTabs;
