import { IFilter, IJobSearch } from "../../types/elements/JobSearch";
import { IListElement } from "../../types/elements/List";

export const filterList: IFilter[] = [
  {
    type: "default",
    label: "Skipper",
    isChecked: false,
  },
  {
    type: "frontend",
    label: "Frontend",
    isChecked: false,
  },
  {
    type: "po",
    label: "PO",
    isChecked: false,
  },
  {
    type: "backend",
    label: "Backend",
    isChecked: false,
  },
  {
    type: "operations",
    label: "Operations",
    isChecked: false,
  },
  {
    type: "qa",
    label: "QA",
    isChecked: false,
  },
  {
    type: "architecture",
    label: "Architecture",
    isChecked: false,
  },
];
