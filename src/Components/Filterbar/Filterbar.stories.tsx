import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Filterbar } from "./Filterbar";
import { filterList, filterListWithLongLabel, filterListWithCheckedFilter } from './Filterbar.mock';

export default {
  title: "Atom/Filterbar",
  component: Filterbar,
} as ComponentMeta<typeof Filterbar>;

export const Default: ComponentStory<typeof Filterbar> = () => (
  <Filterbar filterList={filterList} />
);
Default.parameters = {
  chromatic: { viewports: [450, 760, 1000, 1400] },
};

export const WithLongLabel: ComponentStory<typeof Filterbar> = () => (
  <Filterbar filterList={filterListWithLongLabel} />
);
WithLongLabel.parameters = {
  chromatic: { viewports: [450, 760, 1000, 1400] },
};

export const WithCheckedFilter: ComponentStory<typeof Filterbar> = () => (
  <Filterbar filterList={filterListWithCheckedFilter} />
);
WithCheckedFilter.parameters = {
  chromatic: { viewports: [450, 760, 1000, 1400] },
};