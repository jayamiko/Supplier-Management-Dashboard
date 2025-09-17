import { Radio } from "antd";
import StatusTag from "../components/atoms/StatusTag";

export const supplierListColumn = [
  { title: "#", dataIndex: "key" },
  { title: "Name", dataIndex: "name" },
  { title: "Address", dataIndex: "address" },
  { title: "Contact", dataIndex: "contact" },
  {
    title: "Status",
    dataIndex: "status",
    render: (status) => <StatusTag status={status} />,
  },
];

export const supplierAddressColumn = [
  { title: "⊕", dataIndex: "key" },
  { title: "Name", dataIndex: "name" },
  { title: "Address", dataIndex: "address" },
  {
    title: "Main",
    dataIndex: "main",
    render: (_, record) => <Radio checked={record.main} />,
  },
];

export const reviewApprovalColumn = [
  { title: "Process Name", dataIndex: "processName" },
  { title: "Customer ID", dataIndex: "customerID" },
  { title: "CustomerName", dataIndex: "customerName" },
  { title: "Stage / Flow", dataIndex: "flow" },
  {
    title: "Status",
    dataIndex: "status",
  },
];
