import { Form, Modal } from "antd";
import FieldInput from "./FieldInput";
import { blockSupplierTabItems } from "../../constants/supplier";
import DynamicTabs from "./DynamicTabs";
import AtomAvatar from "../atoms/AtomAvatar";

function BlockSupplierModal({ isModalOpen, handleOk, handleCancel }) {
  return (
    <Modal
      title="Block Supplier"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Save"
      cancelText="Cancel"
    >
      <hr />
      <Form layout="vertical">
        <div className="flex items-center space-x-4">
          <div className="flex-none">
            <AtomAvatar size={120} shape="square" />
          </div>
          <div className="w-full flex flex-col justify-center-center">
            <FieldInput label="Supplier Name" name="name" />
            <FieldInput
              label="Supplier Category"
              name="supplierCAtegory"
              width="60%"
            />
          </div>
        </div>
      </Form>

      <DynamicTabs tabItems={blockSupplierTabItems} />

      <hr />
    </Modal>
  );
}

export default BlockSupplierModal;
