import { Button, Card, Table } from "antd";
import AtomHeading from "../atoms/AtomHeading";

const OrgDataTable = ({ title, data, columns }) => {
  return (
    <Card size="small" className="mb-4">
      <div className="flex items-center justify-between mb-3">
        <AtomHeading>{title}</AtomHeading>
        <div className="flex gap-2">
          <Button type="primary" className="!bg-green-500 hover:!bg-green-600">
            Edit / Save
          </Button>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey={(r) => r.id}
        size="small"
      />
    </Card>
  );
};

export default OrgDataTable;
