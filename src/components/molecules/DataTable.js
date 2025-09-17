import { Table } from "antd";

const DataTable = ({ columns, data }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      rowKey="key"
    />
  );
};

export default DataTable;
