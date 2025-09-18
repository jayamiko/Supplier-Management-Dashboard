import { useState } from "react";
import {
  HomeOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import Breadcrumbs from "../molecules/BreadCrumb";
import MoleculeTabs from "../molecules/Tabs";
import TabPane from "antd/es/tabs/TabPane";
import OrgOutstandings from "../organisms/OrgOutstandings";
import OrgPanelSteps from "../organisms/OrgPanelSteps";
import OrgRatings from "../organisms/OrgRatings";
import { Button, Card, Col, Row, Space } from "antd";
import SupplierDetailHeader from "../molecules/SupplierDetailHeader";
import DynamicTabs from "../molecules/DynamicTabs";
import {
  supplierDataStats,
  supplierDetailOverviewTabItems,
  supplierInvoicesDataStats,
  supplierOrdersDataStats,
} from "../../constants/supplier";
import SearchInput from "../atoms/SearchInput";
import DataTable from "../molecules/DataTable";
import {
  reviewApprovalColumn,
  supplierDetailInvoicesColumns,
  supplierDetailMaterialCatalogColumns,
  supplierDetailOrdersColumns,
} from "../../constants/columns";
import {
  supplierData,
  supplierDetailMaterialCatalogData,
} from "../../data/supplier";
import MaterialCatalogActions from "../molecules/MaterialCatalogActions";
import { useParams } from "react-router-dom";
import StatCard from "../atoms/StatCard";
import OrderCard from "../atoms/OrderCard";
import SupplierReviewActions from "../molecules/SupplierReviewActions";
import AssessmentTemplate from "../templates/AssessmentTemplate";

export default function SupplierDetailManagementPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [stage, setStage] = useState(0);

  const detail = supplierData?.filter((data) => data.id == id)[0];

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
        <div className="border-b px-6 py-3 border">
          <Breadcrumbs
            items={[
              { label: <HomeOutlined />, path: "/" },
              { label: "Supplier Management", path: "/supplier-management" },
              {
                label: "Supplier List",
                path: "/supplier-management/supplier-list",
              },
              { label: "Supplier Detail" },
            ]}
          >
            <div className="space-x-2">
              {" "}
              <Button type="primary" className="!bg-red-600 hover:!bg-red-700">
                Block / Unblock
              </Button>
              <Space>
                <LeftCircleOutlined className="text-gray-500 text-lg" />
                <RightCircleOutlined className="text-gray-500 text-lg" />
              </Space>
              <span className="text-gray-500">1 of 32</span>
            </div>
          </Breadcrumbs>
        </div>

        <div className="px-6 py-4">
          <SupplierDetailHeader data={detail} />
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
                  <OrgPanelSteps
                    title="Stage: Supplier Creation"
                    stage={stage}
                    steps={["Draft", "In Review", "In Assessment", "Active"]}
                    descriptions={["Elapsed 05:00:10", "", "", ""]}
                    onNext={handleNextStage}
                    hasNote
                  />
                  <OrgRatings ratings={ratings} />
                </div>
              </div>
            </TabPane>

            <TabPane tab="Assessment" key="assessment">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <OrgPanelSteps
                    title="Stage: Supplier Creation"
                    stage={1}
                    steps={["Draft", "In Review", "In Assessment", "Active"]}
                    descriptions={[
                      "Jan 01, 2025 08:20:12",
                      "Time Remaining 05:00:10",
                      "",
                      "",
                    ]}
                  />
                </div>

                <div className="col-span-6">
                  <OrgPanelSteps
                    title="Workflow: Supplier Review"
                    stage={2}
                    steps={[
                      "Sales Manager",
                      "Marketing",
                      "Data Management",
                      "SSO",
                    ]}
                    descriptions={[
                      "Jan 01, 2025 08:20:12",
                      "Jan 01, 2025 09:20:12",
                      "Time Remaining 05:00:10",
                      "",
                    ]}
                    hasNote
                  >
                    <SupplierReviewActions />
                  </OrgPanelSteps>
                </div>
              </div>

              <div>
                <AssessmentTemplate />
              </div>
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
              <Row gutter={16} className="my-4">
                {supplierOrdersDataStats.map((stat, idx) => (
                  <Col key={idx} flex="20%">
                    <OrderCard title={stat.title} value={stat.value} />
                  </Col>
                ))}

                <div className="mt-4 w-full">
                  <DataTable columns={supplierDetailOrdersColumns} data={[]} />
                </div>
              </Row>
            </TabPane>

            <TabPane tab="Invoices" key="invoices">
              <Row gutter={16} className="my-4">
                {supplierInvoicesDataStats.map((stat, idx) => (
                  <Col key={idx} flex="20%">
                    <OrderCard title={stat.title} value={stat.value} />
                  </Col>
                ))}

                <div className="mt-4 w-full">
                  <DataTable
                    columns={supplierDetailInvoicesColumns}
                    data={[]}
                  />
                </div>
              </Row>
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
