import { FaRegStar, FaStar } from "react-icons/fa";

export function renderStars(count) {
  const out = [];
  for (let i = 0; i < 5; i++) {
    out.push(
      i < count ? (
        <FaStar key={i} className="inline-block" />
      ) : (
        <FaRegStar key={i} className="inline-block" />
      )
    );
  }
  return <span className="text-yellow-500 ml-2">{out}</span>;
}
