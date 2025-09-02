const staus = [
  {
    nodeLabel: "审核完成1-1",
    status: NodeStatus.COMPLETED,
    children: [],
  },
  {
    status: NodeStatus.COMPLETED,
    nodeLabel: "审核完成1-2",
    children: [],
  },
  {
    status: NodeStatus.COMPLETED,
    nodeLabel: "审核完成1-3",
    children: [],
  },
];

const staus1 = [
  {
    nodeLabel: "审核完成1-1",
    status: NodeStatus.COMPLETED,
    children: [],
  },
  {
    status: NodeStatus.COMPLETED,
    nodeLabel: "审核完成1-2",
    children: [],
  },
  {
    status: NodeStatus.PENDING,
    nodeLabel: "保留意见1-3",
    children: [],
  },
];

const staus2 = [
  {
    nodeLabel: "审核完成1-1",
    status: NodeStatus.COMPLETED,
    children: [],
  },
  {
    status: NodeStatus.PENDING,
    nodeLabel: "保留意见1-2",
    children: [],
  },
  {
    status: NodeStatus.ERROR,
    nodeLabel: "审核失败1-3",
    children: [],
  },
];
