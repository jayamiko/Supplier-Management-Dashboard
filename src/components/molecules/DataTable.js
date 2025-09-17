import { Table } from "antd";

const DataTable = ({ columns, data, onRowClick }) => {
  console.log(onRowClick);
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      rowKey="key"
      onRow={(record) => ({
        onClick: () => {
          console.log("Row clicked:", record);
          if (onRowClick) onRowClick(record);
        },
        style: { cursor: "pointer" },
      })}
    />
  );
};

export default DataTable;
