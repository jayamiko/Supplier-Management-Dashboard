import { EditOutlined } from "@ant-design/icons";
import AtomAvatar from "../atoms/AtomAvatar";
import AtomBadge from "../atoms/AtomBadge";

const ReviewDetailHeader = ({ name, supplierID, status }) => (
  <div className="flex items-start gap-4 p-4">
    <div className="flex-none">
      <AtomAvatar size={72} shape="square" />
    </div>
    <div className="w-1/2">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {name}
            <EditOutlined className="ml-2 text-base" />
          </h1>
          <div className="text-gray-500">Supplier ID</div>
          <div className="text-black">{supplierID}</div>
        </div>
        <div className="flex flex-row ml-auto">
          <AtomBadge color="white">Setroom</AtomBadge>
          <br />
          <AtomBadge color={status === "Active" ? "green" : "orange"}>
            {status}
          </AtomBadge>
        </div>
      </div>
    </div>
  </div>
);

export default ReviewDetailHeader;
