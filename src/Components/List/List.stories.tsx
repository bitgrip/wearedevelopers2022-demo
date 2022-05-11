import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { List } from "./List";
import { single, multi } from './List.mock';

export default {
  title: "Atom/List",
  component: List,
} as ComponentMeta<typeof List>;

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
