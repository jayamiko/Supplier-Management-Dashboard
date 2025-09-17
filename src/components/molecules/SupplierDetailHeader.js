import AtomAvatar from "../atoms/AtomAvatar";
import AtomBadge from "../atoms/AtomBadge";

const SupplierDetailHeader = ({ name, address, status }) => (
  <div className="flex items-start gap-4 p-4">
    <div className="flex-none">
      <AtomAvatar size={72} />
    </div>
    <div className="w-1/2">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
          <div className="text-gray-500">{address}</div>
        </div>
        <div className="flex flex-col ml-auto">
          <AtomBadge color={status === "Active" ? "green" : "orange"}>
            {status}
          </AtomBadge>
          <br />
          <AtomBadge color="white">Setroom</AtomBadge>
        </div>
      </div>
    </div>
  </div>
);

export default SupplierDetailHeader;
