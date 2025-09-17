import { Button, Card, Input, Steps } from "antd";
import AtomHeading from "../atoms/AtomHeading";

const OrgStagePanel = ({ stage, onNext }) => {
  const steps = ["Draft", "In Review", "In Assessment", "Active"];
  return (
    <Card size="small" className="mb-4 border-black">
      <div className="flex items-center justify-between">
        <AtomHeading>Stage: Supplier Creation</AtomHeading>
        <div className="text-sm text-gray-500">SLA: 72 hour(s)</div>
      </div>

      <div className="mt-4">
        <Steps current={stage} size="small">
          {steps.map((s) => (
            <Steps.Step key={s} title={s} />
          ))}
        </Steps>
        <div className="mt-4">
          <Input.TextArea
            rows={3}
            placeholder="Notes"
            className="border-black"
          />
        </div>
        <div className="mt-3 text-right">
          <Button type="primary" onClick={onNext}>
            Next Stage
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default OrgStagePanel;
