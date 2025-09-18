import RatingStars from "../atoms/RasingStars";
import Text from "../atoms/Text";

const AssessmentCard = ({ title, rating, notes, date, user }) => {
  return (
    <div className="border rounded-md p-4 flex flex-col gap-2 shadow-sm">
      <Text className="font-semibold">{title}</Text>
      <RatingStars value={rating} />
      <Text className="text-sm text-gray-600">Notes: {notes || "-"}</Text>
      <Text className="text-xs text-gray-400">
        {date} by {user}
      </Text>
    </div>
  );
};

export default AssessmentCard;
