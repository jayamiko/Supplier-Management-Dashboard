import {
  TeamOutlined,
  AppstoreOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import React from "react";

const menuItems = [
  {
    key: "",
    icon: React.createElement(AppstoreOutlined),
    label: "Dashboard",
  },
  {
    key: "supplier",
    icon: React.createElement(TeamOutlined),
    label: "Supplier Management",
    children: [
      { key: "supplier-management/supplier-dashboard", label: "Dashboard" },
      { key: "supplier-management/supplier-list", label: "Supplier List" },
      {
        key: "supplier-management/review-approvals",
        label: "Review & Approvals",
      },
      { key: "supplier-management/configurations", label: "Configurations" },
    ],
  },
  {
    key: "funnel",
    icon: React.createElement(ExportOutlined),
    label: "Funnel Management",
    children: [
      { key: "funnel-overview", label: "Overview" },
      { key: "funnel-reports", label: "Reports" },
    ],
  },
];

export default menuItems;
