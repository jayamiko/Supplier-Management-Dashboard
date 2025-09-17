import {
  TeamOutlined,
  AppstoreOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import React from "react";

const menuItems = [
  {
    key: "dashboard",
    icon: React.createElement(AppstoreOutlined),
    label: "Dashboard",
  },
  {
    key: "supplier",
    icon: React.createElement(TeamOutlined),
    label: "Supplier Management",
    children: [
      { key: "supplier-dashboard", label: "Dashboard" },
      { key: "supplier-list", label: "Supplier List" },
      { key: "supplier-review", label: "Review & Approvals" },
      { key: "supplier-config", label: "Configurations" },
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
