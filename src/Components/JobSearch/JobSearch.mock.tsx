import { IFilter, IJobSearch } from "../../types/elements/JobSearch";
import { IListElement } from "../../types/elements/List";

export const single: IJobSearch = {
  id: '',
  type: '',
  list: [
    {
      key: "default",
      link: "/#",
      title: "Skipper (w/m/d), Initiativbewerbung",
      tag: "Skipper",
    },
  ],
};

export const jobList: IListElement[] = [
  {
    key: "default",
    link: "/#",
    title: "Skipper (w/m/d), Initiativbewerbung",
    tag: "Skipper",
  },
  {
    key: "frontend",
    link: "/#",
    title: "Senior Frontend-Entwickler (w/m/d)",
    tag: "Frontend",
  },
  {
    key: "frontend",
    link: "/#",
    title: "Frontend-Entwickler (w/m/d)",
    tag: "Frontend",
  },
  {
    key: "qa",
    link: "/#",
    title: "Software-Tester (w/m/d)",
    tag: "QA",
  },
  {
    key: "backend",
    link: "/#",
    title: "Backend-Entwickler (w/m/d)",
    tag: "Backend",
  },
  {
    key: "architecture",
    link: "/#",
    title: "Software Architekt (w/m/d)",
    tag: "Architecture",
  },
  {
    key: "operations",
    link: "/#",
    title: "Operations Engineer (w/m/d)",
    tag: "Operations",
  },
];

export const filterList: IFilter[] = [
  {
    id: '',
    type: "default",
    label: "Skipper",
    isChecked: false,
  },
  {
    id: '',
    type: "frontend",
    label: "Frontend",
    isChecked: false,
  },
  {
    id: '',
    type: "po",
    label: "PO",
    isChecked: false,
  },
  {
    id: '',
    type: "backend",
    label: "Backend",
    isChecked: false,
  },
  {
    id: '',
    type: "operations",
    label: "Operations",
    isChecked: false,
  },
  {
    id: '',
    type: "qa",
    label: "QA",
    isChecked: false,
  },
  {
    id: '',
    type: "architecture",
    label: "Architecture",
    isChecked: false,
  },
];

export const multi: IJobSearch = {
  id: '',
  type: '',
  filterList: filterList,
  list: jobList,
};
