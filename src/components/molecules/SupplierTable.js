import { Table } from "antd";
import StatusTag from "../atoms/StatusTag";

const SupplierTable = ({ data }) => {
  const columns = [
    { title: "#", dataIndex: "key" },
    { title: "Name", dataIndex: "name" },
    { title: "Address", dataIndex: "address" },
    { title: "Contact", dataIndex: "contact" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => <StatusTag status={status} />,
    },
  ];

  return <Table columns={columns} dataSource={data} pagination={false} rowKey="key" />;
};

export default SupplierTable;
