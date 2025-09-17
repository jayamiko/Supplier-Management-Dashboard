export const configurationsStagesData = [
  {
    key: 1,
    no: 1,
    id: "01",
    name: "Supplier Creation",
    stages: ["01", "02", "03"],
    active: true,
  },
  {
    key: 2,
    no: 2,
    id: "02",
    name: "Supplier Assessment",
    stages: ["01", "02", "03"],
    active: true,
  },
  {
    key: 3,
    no: 3,
    id: "03",
    name: "Block  Unblock Supplier",
    stages: ["01", "02", "03"],
    active: true,
  },
];

export const configurationsStageDetailData = [
  {
    key: 1,
    id: "01",
    name: "Draft",
    sla: 24,
    uom: "hours",
    active: true,
  },
  {
    key: 2,
    id: "02",
    name: "In Review",
    sla: 24,
    uom: "hours",
    active: true,
  },
  {
    key: 3,
    id: "03",
    name: "In Assessment",
    sla: 24,
    uom: "hours",
    active: true,
  },
  {
    key: 4,
    id: "04",
    name: "Active",
    active: true,
  },
];
