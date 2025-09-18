import OrgDataTable from "../components/organisms/OrgDataTable";
import {
  materialData,
  supplierAddressData,
  supplierOverviewContactData,
  supplierOverviewGroupData,
  supplierOverviewOtherData,
} from "../data/supplier";
import DataTable from "../components/molecules/DataTable";
import {
  supplierAddressColumns,
  supplierOverviewContactColumns,
  supplierOverviewGroupColumns,
  supplierOverviewMaterialColumns,
  supplierOverviewOtherColumns,
} from "./columns";
import { DollarCircleOutlined, PlusCircleFilled } from "@ant-design/icons";
import React from "react";
import { RiTeamFill } from "react-icons/ri";
import { BsStopwatchFill } from "react-icons/bs";

export const supplierStatusList = [
  {
    key: "1",
    label: "Active",
  },
  {
    key: "2",
    label: "In Progress",
  },
  {
    key: "3",
    label: "Blocked",
  },
];

export const supplierReviewList = [
  {
    key: "1",
    label: "Sales",
  },
  {
    key: "2",
    label: "Marketing",
  },
  {
    key: "3",
    label: "Data Management",
  },
  {
    key: "4",
    label: "SSO",
  },
];

export const supplierDataStats = [
  {
    title: "Total Supplier",
    value: 1869,
    trend: "up",
    percent: 8,
    icon: React.createElement(RiTeamFill),
  },
  {
    title: "New Supplier",
    value: 27,
    trend: "up",
    percent: 1,
    icon: React.createElement(PlusCircleFilled),
  },
  {
    title: "Avg Cost per Supplier",
    value: "Rp 320,3 Mn",
    trend: "down",
    percent: 1,
    icon: React.createElement(DollarCircleOutlined),
  },
  {
    title: "Blocked Supplier",
    value: 31,
    trend: "down",
    percent: 4,
    icon: React.createElement(BsStopwatchFill),
  },
];

export const supplierOrdersDataStats = [
  {
    title: "Total Order",
    value: "4,257",
  },
  {
    title: "On Time Delivery",
    value: "1,869",
  },
  {
    title: "Late Delivery",
    value: "999",
  },
  {
    title: "Order In Progress",
    value: "999",
  },
  {
    title: "Pending",
    value: "999",
  },
];

export const supplierInvoicesDataStats = [
  {
    title: "Total Invoices",
    value: "4,257",
  },
  {
    title: "In Progress",
    value: "1,869",
  },
  {
    title: "Paid",
    value: "999",
  },
  {
    title: "Outstanding",
    value: "999",
  },
];

export const supplierDetailOverviewTabItems = [
  {
    key: 1,
    label: "Address",
    content: (
      <DataTable columns={supplierAddressColumns} data={supplierAddressData} />
    ),
  },
  {
    key: 2,
    label: "Contact",
    content: (
      <DataTable
        columns={supplierOverviewContactColumns}
        data={supplierOverviewContactData}
      />
    ),
  },
  {
    key: 3,
    label: "Groups",
    content: (
      <DataTable
        columns={supplierOverviewGroupColumns}
        data={supplierOverviewGroupData}
      />
    ),
  },
  {
    key: 4,
    label: "Material List",
    content: (
      <OrgDataTable
        title="Materials provided by Supplier"
        data={materialData}
        columns={supplierOverviewMaterialColumns}
      />
    ),
  },
  {
    key: 5,
    label: "Others",
    content: (
      <OrgDataTable
        title="Other Informations"
        data={supplierOverviewOtherData}
        columns={supplierOverviewOtherColumns}
      />
    ),
  },
];
