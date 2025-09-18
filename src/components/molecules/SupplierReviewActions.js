import { Button, Space } from "antd";
import DropdownInput from "./DropdownInput";
import { supplierReviewList } from "../../constants/supplier";

function SupplierReviewActions({ dropdownList = supplierReviewList }) {
  return (
    <div className="mt-3 flex justify-between">
      <div>
        <Space>
          <DropdownInput items={dropdownList} />

          <Button type="primary" className="!bg-red-600 hover:!bg-red-700">
            Return to
          </Button>
        </Space>
      </div>
      <div>
        {" "}
        <Button type="primary" className="!bg-green-500 hover:!bg-green-600">
          Approve
        </Button>
      </div>
    </div>
  );
}

export default SupplierReviewActions;
