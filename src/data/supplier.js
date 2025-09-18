import { DeleteOutlined, EditOutlined, RedoOutlined } from "@ant-design/icons";
import { Space } from "antd";

export const supplierData = [
  {
    key: 1,
    id: 1,
    name: "PT Setroom Indonesia",
    address: "Jakarta, Indonesia",
    contact: "Albert Einstein",
    status: "Active",
  },
  {
    key: 2,
    id: 2,
    name: "PT Suka Suka",
    address: "Bandung, Indonesia",
    contact: "James Lee",
    status: "In Progress",
  },
  {
    key: 3,
    id: 3,
    name: "PT Angin Ribut",
    address: "Denpasar, Indonesia",
    contact: "Maria Chen",
    status: "Blocked",
  },
];

export const supplierAddressData = [
  {
    key: 1,
    name: "Head Office",
    address: "fatmawati Raya St, 123",
    main: true,
  },
  {
    key: 2,
    name: "Branch Office",
    address: "Bandung, Indonesia",
    main: false,
  },
];

export const materialData = [
  {
    id: "m-1",
    group: "IT - Device",
    idLabel: "Computer / Notebook",
    active: true,
  },
  { id: "m-2", group: "IT - Device", idLabel: "Computer / PC", active: true },
];

export const supplierOverviewContactData = [
  {
    key: 1,
    name: "Albert",
    jobPosition: "CEO",
    email: "einstein@gmail.com",
    phone: "0123456789",
    mobile: "0123456789",
    active: true,
  },
  {
    key: 2,
    name: "Isaac",
    jobPosition: "Mgr Proc",
    email: "newton@gmail.com",
    phone: "0123456789",
    mobile: "0123456789",
    active: false,
  },
];

export const supplierOverviewGroupData = [
  {
    key: 1,
    groupName: "Industry",
    value: "Manufacture",
    active: true,
  },
  {
    key: 2,
    groupName: "Telkom Group",
    value: "Non Telkom Group",
    active: true,
  },
];

export const supplierOverviewOtherData = [
  {
    attributeName: "Holding Vendor",
    value: "",
    active: false,
  },
  {
    attributeName: "SAP Vendor Id",
    value: "4100012",
    active: true,
  },
  {
    attributeName: "NPWP",
    value: " 1.000.000-123",
    active: true,
  },
];

export const supplierDetailMaterialCatalogData = [
  {
    materialDetailId: "83E30041UK",
    materialDetailName: "Lenovo Yoga #83E30041UK",
    materialId: " Computer / Notebook",
    price: "Rp 19.000.000",
    priceUploadDate: "01/01/2025 10:23:01",
    status: "Active",
    action: () => {
      return (
        <Space size="middle">
          <EditOutlined
            style={{ color: "#1890ff", cursor: "pointer" }}
            onClick={() => console.log("Edit clicked")}
          />
          <DeleteOutlined
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => console.log("Delete clicked")}
          />
          <RedoOutlined
            style={{ color: "#faad14", cursor: "pointer" }}
            onClick={() => console.log("Repeat clicked")}
          />
        </Space>
      );
    },
  },
];
