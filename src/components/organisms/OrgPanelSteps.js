import { Button, Card, Input, Steps } from "antd";
import AtomHeading from "../atoms/AtomHeading";

const OrgPanelSteps = ({
  title,
  stage,
  steps,
  descriptions,
  onNext,
  hasNote = false,
  children,
}) => {
  return (
    <Card size="small" className="mb-4">
      <div className="flex items-center justify-between">
        <AtomHeading>{title}</AtomHeading>
        <div className="text-sm text-gray-500">SLA: 72 hour(s)</div>
      </div>

      <div className="mt-4">
        <div className="overflow-x-auto">
          <div className="min-w-[500px]">
            <Steps current={stage} size="small" labelPlacement="vertical">
              {steps?.map((s, index) => (
                <Steps.Step
                  key={s}
                  status={
                    index < stage
                      ? "finish"
                      : index === stage
                      ? "process"
                      : "wait"
                  }
                  title={
                    <div className="flex flex-col items-center">
                      <span
                        className={`text-sm ${
                          index <= stage ? "text-blue-500" : "text-gray-500"
                        }`}
                      >
                        {s}
                      </span>
                      {descriptions[index] && (
                        <span
                          className={`text-[10px] mt-1 text-center ${
                            index < stage ? "text-blue-500" : "text-gray-500"
                          }`}
                        >
                          {descriptions[index]}
                        </span>
                      )}
                    </div>
                  }
                />
              ))}
            </Steps>
          </div>
        </div>
        {hasNote && (
          <>
            <div className="mt-4">
              <Input.TextArea
                rows={2}
                placeholder="Notes"
                className="border-black"
              />
            </div>
            {onNext && (
              <div className="mt-3 text-right">
                <Button type="primary" onClick={onNext}>
                  Next Stage
                </Button>
              </div>
            )}
            {children}
          </>
        )}
      </div>
    </Card>
  );
};

export default OrgPanelSteps;
