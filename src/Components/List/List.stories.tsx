import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { List } from "./List";

export default {
  title: "List",
  component: List,
} as ComponentMeta<typeof List>;

const single = {
  filterList: [{id: 'default', label: 'Skipper', isChecked: false}],
  jobs: [{
    id: 'default',
    link: '/#',
    title: 'Skipper (w/m/d), Initiativbewerbung',
    tag: 'Skipper'
  }]
};

const multi = {
  filterList: [{id: 'default', label: 'Skipper', isChecked: false}, {id: 'frontend', label: 'Frontend', isChecked: false}],
  jobs: [{
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

export const Single: ComponentStory<typeof List> = () => (
  <List {...single} />
);
Single.parameters = {
  chromatic: { viewports: [450, 760, 1000, 1400] },
};
export const Multi: ComponentStory<typeof List> = () => (
  <List {...multi} />
);
Multi.parameters = {
  chromatic: { viewports: [450, 760, 1000, 1400] },
};
