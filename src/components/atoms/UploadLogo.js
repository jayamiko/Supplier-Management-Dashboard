import { Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const UploadLogo = () => {
  return (
    <div className="flex items-center">
      <Upload
        name="logo"
        listType="picture-card"
        showUploadList={false}
        beforeUpload={() => false}
      >
        <div>
          <PlusOutlined />
        </div>
      </Upload>
    </div>
  );
};

export default UploadLogo;
