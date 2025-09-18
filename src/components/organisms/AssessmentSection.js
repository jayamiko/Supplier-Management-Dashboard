import { useState } from "react";
import { Button } from "antd";
import NewAssessmentForm from "../molecules/NewAssessmentCard";
import AssessmentCard from "../molecules/AssessmentCard";

const AssessmentSection = ({ title, assessments }) => {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="border p-4 rounded-md w-full border-black">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold">{title}</h2>
        <Button type="primary" onClick={() => setIsAdding(true)}>
          + New
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        {assessments.map((item, idx) => (
          <AssessmentCard key={idx} {...item} />
        ))}
      </div>

      {isAdding && (
        <NewAssessmentForm
          onSave={(data) => {
            console.log("Saved:", data);
            setIsAdding(false);
          }}
          onCancel={() => setIsAdding(false)}
        />
      )}
    </div>
  );
};

export default AssessmentSection;
