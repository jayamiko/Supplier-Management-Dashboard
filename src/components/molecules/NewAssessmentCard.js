import { useState } from "react";
import Input from "../atoms/Input";
import RatingStars from "../atoms/RasingStars";
import { Button } from "antd";

const NewAssessmentForm = ({ onSave, onCancel }) => {
  const [rating, setRating] = useState(0);
  const [notes, setNotes] = useState("");

  return (
    <div className="border p-4 rounded-md flex flex-col gap-3">
      <Input placeholder="Assessment Name" value={notes} onChange={setNotes} />
      <RatingStars value={rating} onChange={setRating} />
      <div className="flex gap-2 justify-end">
        <Button onClick={onCancel}>Cancel</Button>
        <Button type="primary" onClick={() => onSave({ rating, notes })}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default NewAssessmentForm;
