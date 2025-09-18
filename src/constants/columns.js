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

export const supplierAddressColumns = [
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
    dataIndex: "statusInfo",
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

export const supplierOverviewMaterialColumns = [
  {
    title: "⊕",
    dataIndex: "selector",
    width: 40,
    render: () => <span className="text-gray-400">≡</span>,
  },
  { title: "Material Group", dataIndex: "group" },
  { title: "Material ID", dataIndex: "id" },
  {
    title: "Active",
    dataIndex: "active",
    render: (v) => <Checkbox checked={v} />,
  },
];

export const supplierOverviewOtherColumns = [
  { title: "Attribute Name", dataIndex: "attributeName" },
  { title: "Value", dataIndex: "value" },
  {
    title: "Active",
    dataIndex: "active",
    render: (v) => <Checkbox checked={v} />,
  },
];

export const supplierOverviewContactColumns = [
  { title: "⊕", dataIndex: "key" },
  { title: "Name", dataIndex: "name" },
  { title: "Job Position", dataIndex: "jobPosition" },
  { title: "Email", dataIndex: "email" },
  { title: "Phone", dataIndex: "phone" },
  { title: "Mobile", dataIndex: "mobile" },
  {
    title: "Main",
    dataIndex: "main",
    render: (_, record) => <Radio checked={record.main} />,
  },
];

export const supplierOverviewGroupColumns = [
  { title: "#", dataIndex: "key" },
  { title: "Group Name", dataIndex: "groupName" },
  { title: "Value", dataIndex: "value" },
  {
    title: "Active",
    dataIndex: "active",
    render: (_, record) => <Checkbox checked={record.main} />,
  },
];

export const supplierDetailOutstandingColumns = [
  { title: "#", dataIndex: "idx", width: 50 },
  { title: "Invoice Number", dataIndex: "invoice" },
  { title: "Project Name", dataIndex: "project" },
  { title: "Amount", dataIndex: "amount", align: "right" },
  { title: "Aging (days)", dataIndex: "aging", align: "right" },
];

export const supplierDetailMaterialCatalogColumns = [
  { title: "Material Detail ID", dataIndex: "materialDetailId" },
  { title: "MaterialDetailName", dataIndex: "materialDetailName" },
  { title: "Material ID", dataIndex: "materialId" },
  { title: "Price", dataIndex: "price" },
  { title: "Price Upload Date", dataIndex: "priceUploadDate" },
  { title: "Status", dataIndex: "status" },
  {
    title: "Actions",
    dataIndex: "action",
    render: (_, record) => record.action(),
  },
];

export const supplierDetailOrdersColumns = [
  { title: "Order ID (PO)", dataIndex: "orderId" },
  { title: "Shipment Date", dataIndex: "shipmentDate" },
  { title: "Order Status", dataIndex: "orderStatus" },
  { title: "Estimated Delivery Date", dataIndex: "estimatedDeliveryDate" },
];

export const supplierDetailInvoicesColumns = [
  { title: "Order ID (PO)", dataIndex: "orderId" },
  { title: "Invoice No", dataIndex: "invoiceNo" },
  { title: "Received Date", dataIndex: "receivedDate" },
  { title: "Estimated Delivery Date", dataIndex: "estimatedDeliveryDate" },
];
