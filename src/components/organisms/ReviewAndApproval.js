import { Row, Col } from "antd";
import SearchInput from "../atoms/SearchInput";
import SupplierTable from "../molecules/DataTable";
import TitleText from "../atoms/TitleText";
import { reviewApprovalColumn } from "../../constants/columns";
import { reviewApprovalData } from "../../data/reviewApprovals";
import ReviewCard from "../atoms/ReviewCard";
import SupplierActions from "../molecules/SupplierActions";

const ReviewAndApproval = () => {
  return (
    <div>
      <Row justify="space-between" align="middle" style={{ margin: "20px 0" }}>
        <TitleText label="Review & Approvals" level={5} />
      </Row>

      <Row gutter={16}>
        {reviewApprovalData.map((item, i) => {
          return (
            <Col key={i} span={8}>
              <ReviewCard title={item.processName} />
            </Col>
          );
        })}
      </Row>

      <Row justify="space-between" align="middle" style={{ margin: "20px 0" }}>
        <SearchInput
          placeholder="Search Supplier"
          onSearch={(v) => console.log(v)}
        />
        <SupplierActions canExport={false} />
      </Row>

      <SupplierTable columns={reviewApprovalColumn} data={reviewApprovalData} />
    </div>
  );
};

export default ReviewAndApproval;
