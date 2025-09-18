import { Row, Col } from "antd";
import SearchInput from "../atoms/SearchInput";
import DataTable from "../molecules/DataTable";
import TitleText from "../atoms/TitleText";
import { reviewApprovalColumn } from "../../constants/columns";
import { reviewApprovalData } from "../../data/reviewApprovals";
import ReviewCard from "../atoms/ReviewCard";
import SupplierActions from "../molecules/SupplierActions";
import { useNavigate } from "react-router-dom";

const ReviewAndApproval = () => {
  const navigate = useNavigate();

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

      <DataTable
        columns={reviewApprovalColumn}
        data={reviewApprovalData}
        onRowClick={(record) =>
          navigate(`/supplier-management/review-approvals/${record.id}`)
        }
      />
    </div>
  );
};

export default ReviewAndApproval;
