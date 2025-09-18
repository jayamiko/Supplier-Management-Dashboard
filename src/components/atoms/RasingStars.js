import { Rate } from "antd";

const RatingStars = ({ value, onChange }) => {
  return <Rate value={value} onChange={onChange} />;
};

export default RatingStars;
