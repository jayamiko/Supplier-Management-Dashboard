import { Upload, Typography } from "antd";
import { InboxOutlined, FolderOutlined, FileOutlined } from "@ant-design/icons";
import DataTable from "./DataTable";

const { Dragger } = Upload;
const { Text } = Typography;

const data = [
  {
    key: "1",
    name: "Test1.pdf",
    createdAt: "Jan 01, 2025 09:25:14",
    isFolder: true,
  },
  {
    key: "2",
    name: "Test2.pdf",
    createdAt: "Jan 01, 2025 09:27:38",
    isFolder: false,
  },
];

const FileUploadList = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) =>
        record.isFolder ? (
          <span>
            <FolderOutlined style={{ marginRight: 8 }} />
            {record.name}
          </span>
        ) : (
          <span>
            <FileOutlined style={{ marginRight: 8 }} />
            {record.name}
          </span>
        ),
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];

  return (
    <div className="border border-black p-4">
      <DataTable columns={columns} data={data} />

      <div style={{ marginTop: 6 }}>
        <Text strong>Upload Attachment</Text>
        <Dragger multiple style={{ marginTop: 8 }} beforeUpload={() => false}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from
            uploading company data or other banned files.
          </p>
        </Dragger>
      </div>
    </div>
  );
};

export default FileUploadList;
