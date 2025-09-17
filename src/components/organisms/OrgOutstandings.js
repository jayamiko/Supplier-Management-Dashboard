import { Card, Table } from "antd";
import AtomHeading from "../atoms/AtomHeading";

const OrgOutstandings = ({ items }) => {
  const columns = [
    { title: "#", dataIndex: "idx", width: 50 },
    { title: "Invoice Number", dataIndex: "invoice" },
    { title: "Project Name", dataIndex: "project" },
    { title: "Amount", dataIndex: "amount", align: "right" },
    { title: "Aging (days)", dataIndex: "aging", align: "right" },
  ];

  return (
    <Card size="small" className="mb-4 border-black">
      <AtomHeading>Outstandings</AtomHeading>
      <Table
        columns={columns}
        dataSource={items}
        pagination={false}
        rowKey={(r) => r.invoice}
        size="small"
      />
    </Card>
  );
};

export default OrgOutstandings;
