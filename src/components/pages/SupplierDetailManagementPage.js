import { useState } from "react";
import { HomeOutlined } from "@ant-design/icons";
import Breadcrumbs from "../molecules/BreadCrumb";
import MoleculeTabs from "../molecules/Tabs";
import TabPane from "antd/es/tabs/TabPane";
import OrgOutstandings from "../organisms/OrgOutstandings";
import OrgStagePanel from "../organisms/OrgStagePanel";
import OrgRatings from "../organisms/OrgRatings";
import { Card } from "antd";
import OrgMaterials from "../organisms/OrgMaterials";
import SupplierDetailHeader from "../molecules/SupplierDetailHeader";
import DynamicTabs from "../molecules/DynamicTabs";
import { materialData } from "../../data/supplier";

export default function SupplierDetailManagementPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [editing, setEditing] = useState(false);
  const [stage, setStage] = useState(0);

  const configurationTabItems = [
    {
      key: 1,
      label: "Address",
      content: <></>,
    },
    {
      key: 2,
      label: "Contact",
      content: <></>,
    },
    {
      key: 3,
      label: "Groups",
      content: <></>,
    },
    {
      key: 4,
      label: "Material List",
      content: (
        <OrgMaterials data={materialData} onToggleEdit={handleToggleEdit} />
      ),
    },
    {
      key: 5,
      label: "Others",
      content: <></>,
    },
  ];

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

  function handleToggleEdit() {
    setEditing((s) => !s);
  }

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
                  <DynamicTabs tabItems={configurationTabItems} />
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
                <p>
                  Assessment content goes here — you can reuse the organisms
                  above or add new ones.
                </p>
              </Card>
            </TabPane>

            <TabPane tab="Material Catalog" key="catalog">
              <Card>
                <p>Material Catalog list / search / filters.</p>
              </Card>
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
