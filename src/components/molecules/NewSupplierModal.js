import { Form, Modal, Row } from "antd";
import FieldInput from "./FieldInput";
import DataTable from "./DataTable";
import { supplierAddressColumn } from "../../constants/columns";
import { supplierAddressData } from "../../data/supplier";
import UploadLogo from "../atoms/UploadLogo";

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

      <DataTable columns={supplierAddressColumn} data={supplierAddressData} />

      <hr />
    </Modal>
  );
}

export default NewSupplierModal;
