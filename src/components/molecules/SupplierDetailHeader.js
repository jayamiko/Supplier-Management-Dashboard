import AtomAvatar from "../atoms/AtomAvatar";
import AtomBadge from "../atoms/AtomBadge";
import StatusTag from "../atoms/StatusTag";

const SupplierDetailHeader = ({ data }) => (
  <div className="flex items-start gap-4 p-4">
    <div className="flex-none">
      <AtomAvatar size={72} shape="square" />
    </div>
    <div className="w-1/2">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{data?.name}</h1>
          <div className="text-gray-500">{data?.address}</div>
        </div>
        <div className="flex flex-col ml-auto">
          {data.status && <StatusTag status={data.status} />}
          <br />
          <AtomBadge color="white">{data?.nickName}</AtomBadge>
        </div>
      </div>
    </div>
  </div>
);

export default SupplierDetailHeader;
