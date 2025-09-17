import { useState } from "react";
import { Row, Col, Table, Button } from "antd";
import TitleText from "../atoms/TitleText";
import {
  configurationsStageDetailColumns,
  configurationsStagesColumns,
} from "../../constants/columns";
import {
  configurationsStageDetailData,
  configurationsStagesData,
} from "../../data/configurations";

const ConfigurationStagesSection = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <Row justify="space-between" gutter={16}>
      <Col span={12}>
        <Row
          justify="space-between"
          align="middle"
          style={{ margin: "20px 0" }}
        >
          <TitleText label="Stages" level={5} isBold className="!m-0" />
          <Button type="primary" className="!bg-green-500 hover:!bg-green-600">
            Edit / Save
          </Button>
        </Row>
        <Table
          columns={configurationsStagesColumns}
          dataSource={configurationsStagesData}
          pagination={false}
          rowKey="id"
          onRow={(record) => ({
            onClick: () => setSelectedRow(record),
            className: "cursor-pointer",
          })}
          rowClassName={(record) =>
            record.id === selectedRow?.id ? "bg-gray-200" : ""
          }
        />
      </Col>

      {selectedRow ? (
        <Col span={12}>
          <Row justify="space-between" align="middle" className="my-5">
            <TitleText
              label="Stage's Detail"
              level={5}
              isBold
              className="!m-0"
            />
            <Button
              type="primary"
              className="!bg-green-500 hover:!bg-green-600"
            >
              Edit / Save
            </Button>
          </Row>

          <Row className="my-5">
            <div className="w-full flex items-center gap-2">
              <span className="whitespace-nowrap">Stage Name:</span>
              <div className="border border-black flex-1 px-2">
                {selectedRow.id}: {selectedRow.name}
              </div>
            </div>
          </Row>

          <Table
            columns={configurationsStageDetailColumns}
            dataSource={configurationsStageDetailData}
            pagination={false}
            rowKey="id"
            onRow={(record) => ({
              onClick: () => setSelectedRow(record),
              className: "cursor-pointer",
            })}
            rowClassName={(record) =>
              record.id === selectedRow?.id ? "bg-gray-200" : ""
            }
            summary={(pageData) => {
              // hitung total SLA
              let totalSla = 0;
              pageData.forEach(({ sla }) => {
                if (sla) totalSla += sla;
              });

              return (
                <Table.Summary.Row>
                  <Table.Summary.Cell
                    index={0}
                    colSpan={3}
                    className="text-center"
                  >
                    Total
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={3}>{totalSla}</Table.Summary.Cell>
                  <Table.Summary.Cell index={4}>hours</Table.Summary.Cell>
                  <Table.Summary.Cell index={5}></Table.Summary.Cell>
                </Table.Summary.Row>
              );
            }}
          />
        </Col>
      ) : (
        <></>
      )}
    </Row>
  );
};

export default ConfigurationStagesSection;
