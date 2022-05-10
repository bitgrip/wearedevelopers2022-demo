import { IJobSearch } from "../../types/elements/JobSearch";

export const single:IJobSearch = {
  list: [{
    key: 'default',
    link: '/#',
    title: 'Skipper (w/m/d), Initiativbewerbung',
    tag: 'Skipper'
  }]
};

export const multi:IJobSearch = {
  filterList: [{id: 'default', label: 'Skipper', isChecked: false}, {id: 'frontend', label: 'Frontend', isChecked: false}],
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