import { Checkbox, Radio } from "antd";
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

export const configurationsStagesColumns = [
  { title: "⊕", dataIndex: "no", key: "no" },
  { title: "ID", dataIndex: "id", key: "id" },
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Stages", dataIndex: "stages", key: "stages" },
  {
    title: "Active",
    dataIndex: "active",
    key: "active",
    render: (_, record) => <Checkbox checked={record.active} />,
  },
];

export const configurationsStageDetailColumns = [
  { title: "⊕", dataIndex: "no", key: "no" },
  { title: "ID", dataIndex: "id", key: "id" },
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "SLA", dataIndex: "sla", key: "sla" },
  { title: "UoM", dataIndex: "uom", key: "uom" },
  {
    title: "Active",
    dataIndex: "active",
    key: "active",
    render: (_, record) => <Checkbox checked={record.active} />,
  },
];
