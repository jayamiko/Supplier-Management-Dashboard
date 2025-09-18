import { EditOutlined } from "@ant-design/icons";
import AtomAvatar from "../atoms/AtomAvatar";
import AtomBadge from "../atoms/AtomBadge";
import StatusTag from "../atoms/StatusTag";

const ReviewDetailHeader = ({ data }) => (
  <div className="flex items-start gap-4 p-4">
    <div className="flex-none">
      <AtomAvatar size={72} shape="square" />
    </div>
    <div className="w-1/2">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {data?.customerName}
            <EditOutlined className="ml-2 text-base" />
          </h1>
          <div className="text-gray-500">Supplier ID</div>
          <div className="text-black">{data?.customerID}</div>
        </div>
        <div className="flex flex-row ml-auto">
          <AtomBadge color="white">{data?.nickName}</AtomBadge>
          <br />
          {data.status && <StatusTag status={data.status} />}
        </div>
      </div>
    </div>
  </div>
);

export default ReviewDetailHeader;
