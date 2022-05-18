import { IFilter, IJobSearch } from "../../types/elements/JobSearch";
import { IListElement } from "../../types/elements/List";

export const single: IJobSearch = {
  type: "",
  list: [
    {
      jobid: "001",
      key: "default",
      link: "/#",
      title: "Skipper (w/m/d), Initiativbewerbung",
      tag: "Skipper",
    },
  ],
};

export const jobList: IListElement[] = [
  {
    jobid: "001",
    key: "default",
    link: "/#",
    title: "Skipper (w/m/d), Initiativbewerbung",
    tag: "Skipper",
  },
  {
    jobid: "002",
    key: "frontend",
    link: "/#",
    title: "Senior Frontend-Entwickler (w/m/d)",
    tag: "Frontend",
  },
  {
    jobid: "003",
    key: "frontend",
    link: "/#",
    title: "Frontend-Entwickler (w/m/d)",
    tag: "Frontend",
  },
  {
    jobid: "004",
    key: "qa",
    link: "/#",
    title: "Software-Tester (w/m/d)",
    tag: "QA",
  },
  {
    jobid: "005",
    key: "backend",
    link: "/#",
    title: "Backend-Entwickler (w/m/d)",
    tag: "Backend",
  },
  {
    jobid: "006",
    key: "architecture",
    link: "/#",
    title: "Software Architekt (w/m/d)",
    tag: "Architecture",
  },
  {
    jobid: "007",
    key: "operations",
    link: "/#",
    title: "Operations Engineer (w/m/d)",
    tag: "Operations",
  },
];

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

export const multi: IJobSearch = {
  type: "",
  filterList: filterList,
  list: jobList,
};
