import { Row, Col, Button, Space } from "antd";
import StatCard from "../atoms/StatCard";
import SearchInput from "../atoms/SearchInput";
import SupplierActions from "../molecules/SupplierActions";
import SupplierTable from "../molecules/SupplierTable";
import TitlePage from "../atoms/TitlePage";
import { UserOutlined } from "@ant-design/icons";
import DropdownInput from "../molecules/DropdownInput";
import {
  supplierDataStats,
  supplierStatusList,
} from "../../constants/supplier";

const data = [
  {
    key: 1,
    name: "PT Setroom Indonesia",
    address: "Jakarta, Indonesia",
    contact: "Albert Einstein",
    status: "Active",
  },
  {
    key: 2,
    name: "PT Suka Suka",
    address: "Bandung, Indonesia",
    contact: "James Lee",
    status: "In Progress",
  },
  {
    key: 3,
    name: "PT Angin Ribut",
    address: "Denpasar, Indonesia",
    contact: "Maria Chen",
    status: "Blocked",
  },
];

const SupplierList = () => {
  return (
    <div>
      <Row justify="space-between" align="middle" style={{ margin: "20px 0" }}>
        <TitlePage label="Supplier List" level={5} />
        <Button type="primary">
          <UserOutlined /> New Supplier
        </Button>
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

      <SupplierTable data={data} />
    </div>
  );
};

export default SupplierList;
