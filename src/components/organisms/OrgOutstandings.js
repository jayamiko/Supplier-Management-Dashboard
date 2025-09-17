import { Card, Table } from "antd";
import AtomHeading from "../atoms/AtomHeading";
import { supplierDetailOutstandingColumns } from "../../constants/columns";

const OrgOutstandings = ({ items }) => {
  return (
    <Card size="small" className="mb-4">
      <AtomHeading>Outstandings</AtomHeading>
      <Table
        columns={supplierDetailOutstandingColumns}
        dataSource={items}
        pagination={false}
        rowKey={(r) => r.invoice}
        size="small"
      />
    </Card>
  );
};

export default OrgOutstandings;
