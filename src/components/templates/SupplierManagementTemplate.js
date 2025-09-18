import { Outlet } from "react-router-dom";
import LayoutTemplate from "./LayoutTemplate";

const SupplierManagementTemplate = () => {
  return (
    <LayoutTemplate>
      <Outlet />
    </LayoutTemplate>
  );
};

export default SupplierManagementTemplate;
