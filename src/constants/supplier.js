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

export const supplierDataStats = [
  {
    title: "Total Supplier",
    value: 1869,
    trend: "up",
    percent: 8,
  },
  {
    title: "New Supplier",
    value: 27,
    trend: "up",
    percent: 1,
  },
  {
    title: "Avg Cost per Supplier",
    value: "Rp 320,3 Mn",
    trend: "down",
    percent: 1,
  },
  {
    title: "Blocked Supplier",
    value: 31,
    trend: "down",
    percent: 4,
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
