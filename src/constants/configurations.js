import { Table } from "antd";
import { configurationsStagesColumns } from "./columns";
import { configurationsStagesData } from "../data/configurations";
import ConfigurationStagesSection from "../components/molecules/ConfigurationStagesSection";

export const configurationTabItems = [
  {
    key: "1",
    label: "Stages",
    content: <ConfigurationStagesSection />,
  },
  {
    key: "2",
    label: "Workflows",
    content: (
      <Table
        columns={configurationsStagesColumns}
        dataSource={configurationsStagesData}
        pagination={false}
      />
    ),
  },
  {
    key: "3",
    label: "Others",
    content: (
      <Table
        columns={configurationsStagesColumns}
        dataSource={configurationsStagesData}
        pagination={false}
      />
    ),
  },
];
