import { Table } from "antd";

const DataTable = ({ columns, data, onRowClick }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      rowKey="key"
      scroll={{ x: "max-content" }}
      onRow={(record) => ({
        onClick: () => {
          if (onRowClick) onRowClick(record);
        },
        style: { cursor: "pointer" },
      })}
    />
  );
};

export default DataTable;
