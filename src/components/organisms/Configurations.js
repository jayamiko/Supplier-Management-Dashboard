import { Row } from "antd";
import TitleText from "../atoms/TitleText";
import DynamicTabs from "../molecules/DynamicTabs";
import { configurationTabItems } from "../../constants/configurations";

function Configurations() {
  return (
    <div>
      <Row justify="space-between" align="middle" style={{ margin: "20px 0" }}>
        <TitleText label="Configurations" level={5} isBold />
      </Row>

      <DynamicTabs tabItems={configurationTabItems} />
    </div>
  );
}

export default Configurations;
