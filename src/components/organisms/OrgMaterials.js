import { Button, Card, Checkbox, Table } from "antd";
import AtomHeading from "../atoms/AtomHeading";

const OrgMaterials = ({ data, onToggleEdit }) => {
  const columns = [
    {
      title: "⊕",
      dataIndex: "selector",
      width: 40,
      render: () => <span className="text-gray-400">≡</span>,
    },
    { title: "Material Group", dataIndex: "group" },
    { title: "Material ID", dataIndex: "id" },
    {
      title: "Active",
      dataIndex: "active",
      render: (v) => <Checkbox checked={v} />,
    },
  ];

  return (
    <Card size="small" className="mb-4 border-black">
      <div className="flex items-center justify-between mb-3">
        <AtomHeading>Materials provided by Supplier</AtomHeading>
        <div className="flex gap-2">
          <Button
            type="primary"
            onClick={onToggleEdit}
            className="!bg-green-500 hover:!bg-green-600"
          >
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

export default OrgMaterials;
