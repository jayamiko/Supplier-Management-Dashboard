import { Form, Modal } from "antd";
import FieldInput from "./FieldInput";
import UploadLogo from "../atoms/UploadLogo";
import { supplierDetailOverviewTabItems } from "../../constants/supplier";
import DynamicTabs from "./DynamicTabs";

function NewSupplierModal({ isModalOpen, handleOk, handleCancel }) {
  return (
    <Modal
      title="New Supplier"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Save"
      cancelText="Cancel"
    >
      <hr />
      <Form layout="vertical">
        <div className="flex items-center space-x-4">
          <UploadLogo />
          <div className="w-full flex flex-col justify-center-center">
            <FieldInput label="Supplier Name" name="name" />
            <FieldInput label="Nick Name" name="nickname" width="60%" />
          </div>
        </div>
      </Form>

      <DynamicTabs tabItems={supplierDetailOverviewTabItems} />

      <hr />
    </Modal>
  );
}

export default NewSupplierModal;
