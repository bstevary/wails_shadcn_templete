// import fs from "fs"
// import path from "path"
// import { faker } from "@faker-js/faker"

// import { labels, priorities, statuses } from "./data"

// const tasks = Array.from({ length: 100 }, () => ({
//   id: `TASK-${faker.number.int({ min: 1000, max: 9999 })}`,
//   title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
//   status: faker.helpers.arrayElement(statuses).value,
//   label: faker.helpers.arrayElement(labels).value,
//   priority: faker.helpers.arrayElement(priorities).value,
// }))

// fs.writeFileSync(
//   path.join(__dirname, "tasks.json"),
//   JSON.stringify(tasks, null, 2)
// ) SEEDING LOGIC

import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
];
