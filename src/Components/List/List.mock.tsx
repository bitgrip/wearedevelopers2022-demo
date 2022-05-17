import { IList } from "../../types/elements/List";

export const single:IList = {
  id: "singleList",
  type: "list",
  list: [{
    key: 'default',
    link: '/#',
    title: 'Skipper (w/m/d), Initiativbewerbung',
    tag: 'Skipper'
  }]
};

export const multi:IList = {
  id: "multiList",
  type: "list",
  list: [{
    key: 'default',
    link: '/#',
    title: 'Skipper (w/m/d), Initiativbewerbung',
    tag: 'Skipper'
  },
  {
    key: 'frontend',
    link: '/#',
    title: 'Senior Frontend-Entwickler (w/m/d)',
    tag: 'Frontend'
  },
  {
    key: 'frontend',
    link: '/#',
    title: 'Frontend-Entwickler (w/m/d)',
    tag: 'Frontend'
  }]
};
