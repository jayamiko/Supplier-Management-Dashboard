import { assessmentSections } from "../../constants/assessment";
import RatingStars from "../atoms/RasingStars";
import AssessmentSection from "../organisms/AssessmentSection";

const AssessmentTemplate = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {assessmentSections?.map((section, index) => (
        <div key={index}>
          <div className="text-center mb-2 border border-black rounded-md">
            <p className="text-sm">Overall Rating</p>
            <RatingStars value={section.overallRating} />
          </div>
          <AssessmentSection
            title={section.title}
            assessments={section.assessments}
          />
        </div>
      ))}
    </div>
  );
};

export default AssessmentTemplate;
