import { IList } from "../../types/elements/List";

export const single: IList = {
  id: "singleList",
  type: "list",
  list: [
    {
      jobid: "001",
      key: "default",
      link: "/#",
      title: "Skipper (w/m/d), Initiativbewerbung Skipper (w/m/d), Initiativbewerbung Skipper (w/m/d), Initiativbewerbung Skipper (w/m/d), Initiativbewerbung",
      tag: "Skipper verylong position name",
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
    {
      jobid: "004",
      key: "backend",
      link: "/#",
      title: "Super-Duper-Entwickler who will be responsible for literally everything you can imagine (w/m/d)",
      tag: "Very looooooong tag",
    },
  ],
};
