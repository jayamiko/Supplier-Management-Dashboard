import { Card } from "antd";
import AtomHeading from "../atoms/AtomHeading";
import { renderStars } from "../../helpers/renderStars";

const OrgRatings = ({ ratings }) => (
  <Card size="small" className="mb-4">
    <AtomHeading>Performance Ratings</AtomHeading>
    <div className="space-y-3 mt-3">
      {ratings.map((r, i) => (
        <div key={i} className="p-3 border rounded-md bg-white">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-sm">Price : {renderStars(r.price)}</div>
              <div className="text-sm">
                Delivery Time : {renderStars(r.delivery)}
              </div>
              <div className="text-xs text-gray-500 mt-2">{r.notes}</div>
              <div className="text-xs text-gray-400">
                {r.date} by {r.user}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Card>
);

export default OrgRatings;
