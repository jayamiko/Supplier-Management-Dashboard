import { useState } from "react";
import { HomeOutlined } from "@ant-design/icons";
import Breadcrumbs from "../molecules/BreadCrumb";
import MoleculeTabs from "../molecules/Tabs";
import TabPane from "antd/es/tabs/TabPane";
import { Button, Card, Col, Row, Space } from "antd";
import SearchInput from "../atoms/SearchInput";
import DataTable from "../molecules/DataTable";
import { supplierDetailMaterialCatalogColumns } from "../../constants/columns";
import { supplierDetailMaterialCatalogData } from "../../data/supplier";
import MaterialCatalogActions from "../molecules/MaterialCatalogActions";
import ReviewDetailHeader from "../molecules/ReviewDetailHeader";
import OrgPanelSteps from "../organisms/OrgPanelSteps";
import DropdownInput from "../molecules/DropdownInput";
import {
  supplierDetailOverviewTabItems,
  supplierReviewList,
} from "../../constants/supplier";
import OrgDataTable from "../organisms/OrgDataTable";
import DynamicTabs from "../molecules/DynamicTabs";
import { renderStars } from "../../helpers/renderStars";
import HistoryTimeline from "../organisms/HistoryTimeline";
import {
  historyTimelineData,
  reviewApprovalData,
} from "../../data/reviewApprovals";
import { useParams } from "react-router-dom";

export default function ReviewDetailManagementPage() {
  const { id } = useParams();

  const [activeTab, setActiveTab] = useState("overview");

  const detail = reviewApprovalData?.filter((data) => data.id == id)[0];

  const stats = [
    { label: "Since:", value: "01 Jan 2025" },
    { label: "Leads:", value: 7 },
    { label: "Converted:", value: 3 },
    { label: "Projects:", value: 3 },
    { label: "Ratings:", value: renderStars(3) },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-sm rounded-md border">
        <div className="border-b px-6 py-3">
          <Breadcrumbs
            items={[
              { label: <HomeOutlined />, path: "/" },
              { label: "Supplier Management", path: "/" },
              {
                label: "Review & Apprivals",
                path: "/supplier-management/review-approvals",
              },
              { label: detail?.processName },
            ]}
          />
        </div>

        <div className="px-6 py-4">
          <ReviewDetailHeader data={detail} />
        </div>

        <div className="px-6 pb-6">
          <MoleculeTabs activeKey={activeTab} onChange={(k) => setActiveTab(k)}>
            <TabPane tab="Overview" key="overview">
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
                  <br />
                  <OrgDataTable title="Brief Information">
                    <Row gutter={16} className="my-4">
                      {stats.map((item, idx) => (
                        <Col key={idx} flex="20%">
                          <div className="text-gray-500">{item.label}</div>
                          <div>{item.value}</div>
                        </Col>
                      ))}
                    </Row>
                    <DynamicTabs tabItems={supplierDetailOverviewTabItems} />
                  </OrgDataTable>
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
                    <div className="mt-3 flex justify-between">
                      <div>
                        <Space>
                          <DropdownInput items={supplierReviewList} />

                          <Button
                            type="primary"
                            className="!bg-red-600 hover:!bg-red-700"
                          >
                            Return to
                          </Button>
                        </Space>
                      </div>
                      <div>
                        {" "}
                        <Button
                          type="primary"
                          className="!bg-green-500 hover:!bg-green-600"
                        >
                          Approve
                        </Button>
                      </div>
                    </div>
                  </OrgPanelSteps>
                  <HistoryTimeline history={historyTimelineData} />
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
