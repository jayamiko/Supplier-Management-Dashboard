import { useState } from "react";
import { HomeOutlined } from "@ant-design/icons";
import Breadcrumbs from "../molecules/BreadCrumb";
import MoleculeTabs from "../molecules/Tabs";
import TabPane from "antd/es/tabs/TabPane";
import OrgOutstandings from "../organisms/OrgOutstandings";
import OrgStagePanel from "../organisms/OrgStagePanel";
import OrgRatings from "../organisms/OrgRatings";
import { Card, Row, Space } from "antd";
import SupplierDetailHeader from "../molecules/SupplierDetailHeader";
import DynamicTabs from "../molecules/DynamicTabs";
import { supplierDetailOverviewTabItems } from "../../constants/supplier";
import SearchInput from "../atoms/SearchInput";
import DataTable from "../molecules/DataTable";
import {
  supplierDetailMaterialCatalogColumns,
  supplierListColumn,
} from "../../constants/columns";
import {
  supplierData,
  supplierDetailMaterialCatalogData,
} from "../../data/supplier";
import MaterialCatalogActions from "../molecules/MaterialCatalogActions";

export default function SupplierDetailManagementPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [stage, setStage] = useState(0);

  const outstandingItems = [
    {
      idx: 1,
      invoice: "INV1234",
      project: "Project ABC",
      amount: "123.000",
      aging: 34,
    },
  ];

  const ratings = [
    {
      price: 3,
      delivery: 4,
      notes: "Good quality, on time",
      date: "Feb 14, 2025",
      user: "User Legal",
    },
    {
      price: 4,
      delivery: 3,
      notes: "Fast respond but price higher",
      date: "Feb 12, 2025",
      user: "User Legal",
    },
  ];

  function handleNextStage() {
    setStage((s) => Math.min(3, s + 1));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-sm rounded-md border">
        <div className="border-b px-6 py-3">
          <Breadcrumbs
            items={[
              { label: <HomeOutlined />, path: "/" },
              { label: "Supplier Management", path: "/" },
              { label: "Supplier List", path: "/supplier-list" },
              { label: "Supplier Detail" },
            ]}
          />
        </div>

        <div className="px-6 py-4">
          <SupplierDetailHeader
            name="PT Setroom Indonesia"
            address="Fatmawati Raya St, 33 · Jakarta Selatan"
            status="Active"
          />
        </div>

        <div className="px-6 pb-6">
          <MoleculeTabs activeKey={activeTab} onChange={(k) => setActiveTab(k)}>
            <TabPane tab="Overview" key="overview">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <DynamicTabs tabItems={supplierDetailOverviewTabItems} />
                  <br />
                  <OrgOutstandings items={outstandingItems} />
                </div>

                <div className="col-span-6">
                  <OrgStagePanel stage={stage} onNext={handleNextStage} />
                  <OrgRatings ratings={ratings} />
                </div>
              </div>
            </TabPane>

            <TabPane tab="Assessment" key="assessment">
              <Card>
                <p>Assessment table and quick actions.</p>
              </Card>
            </TabPane>

            <TabPane tab="Material Catalog" key="catalog">
              <Row
                justify="space-between"
                align="middle"
                style={{ margin: "20px 0" }}
              >
                <Space>
                  <SearchInput
                    placeholder="Search Material"
                    onSearch={(v) => console.log(v)}
                  />
                </Space>
                <MaterialCatalogActions />
              </Row>

              <DataTable
                columns={supplierDetailMaterialCatalogColumns}
                data={supplierDetailMaterialCatalogData}
              />
            </TabPane>

            <TabPane tab="Orders" key="orders">
              <Card>
                <p>Orders table and quick actions.</p>
              </Card>
            </TabPane>

            <TabPane tab="Invoices" key="invoices">
              <Card>
                <p>Invoices table and outstanding summary.</p>
              </Card>
            </TabPane>

            <TabPane tab="Projects" key="projects">
              <Card>
                <p>Related projects list.</p>
              </Card>
            </TabPane>

            <TabPane tab="Services" key="services">
              <Card>
                <p>Services provided by supplier.</p>
              </Card>
            </TabPane>

            <TabPane tab="History" key="history">
              <Card>
                <p>Timeline / audit logs.</p>
              </Card>
            </TabPane>
          </MoleculeTabs>
        </div>
      </div>
    </div>
  );
}
