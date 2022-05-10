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
  filterList: [{
    type: 'default',
    label: 'Skipper',
    isChecked: false
  }, {
    type: 'frontend',
    label: 'Frontend',
    isChecked: false
  }, {
    type: 'po',
    label: 'PO',
    isChecked: false
  }, {
    type: 'backend',
    label: 'Backend',
    isChecked: false
  }, {
    type: 'operations',
    label: 'Operations',
    isChecked: false
  }, {
    type: 'qa',
    label: 'QA',
    isChecked: false
  }, {
    type: 'architecture',
    label: 'Architecture',
    isChecked: false
  }],
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
  },
  {
    key: 'qa',
    link: '/#',
    title: 'Software-Tester (w/m/d)',
    tag: 'QA'
  },
  {
    key: 'backend',
    link: '/#',
    title: 'Backend-Entwickler (w/m/d)',
    tag: 'Backend'
  },
  {
    key: 'architecture',
    link: '/#',
    title: 'Software Architekt (w/m/d)',
    tag: 'Architecture'
  },
  {
    key: 'operations',
    link: '/#',
    title: 'Operations Engineer (w/m/d)',
    tag: 'Operations'
  }]
};