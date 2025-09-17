import { Row, Col, Button, Space } from "antd";
import StatCard from "../atoms/StatCard";
import SearchInput from "../atoms/SearchInput";
import SupplierActions from "../molecules/SupplierActions";
import SupplierTable from "../molecules/DataTable";
import TitleText from "../atoms/TitleText";
import { UserOutlined } from "@ant-design/icons";
import DropdownInput from "../molecules/DropdownInput";
import {
  supplierDataStats,
  supplierStatusList,
} from "../../constants/supplier";
import { useState } from "react";
import { supplierData } from "../../data/supplier";
import NewSupplierModal from "../molecules/NewSupplierModal";
import { supplierListColumn } from "../../constants/columns";

const SupplierList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log("Supplier saved!");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Row justify="space-between" align="middle" style={{ margin: "20px 0" }}>
        <TitleText label="Supplier List" level={5} />
        <Button type="primary" onClick={showModal}>
          <UserOutlined /> New Supplier
        </Button>

        {/* Modal New Supplier */}
        <NewSupplierModal
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      </Row>

      <Row gutter={16}>
        {supplierDataStats.map((stat, i) => {
          return (
            <Col key={i} span={6}>
              <StatCard
                title={stat.title}
                value={stat.value}
                trend={stat.trend}
                percent={stat.percent}
              />
            </Col>
          );
        })}
      </Row>

      <Row justify="space-between" align="middle" style={{ margin: "20px 0" }}>
        <Space>
          <SearchInput
            placeholder="Search Customer"
            onSearch={(v) => console.log(v)}
          />
          <DropdownInput items={supplierStatusList} />
        </Space>
        <SupplierActions />
      </Row>

      <SupplierTable columns={supplierListColumn} data={supplierData} />
    </div>
  );
};

export default SupplierList;
