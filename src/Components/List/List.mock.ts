import { IList } from "../../types/elements/List";

export const single: IList = {
  id: "singleList",
  type: "list",
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

export const multi: IList = {
  id: "multiList",
  type: "list",
  list: [
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
  ],
};
