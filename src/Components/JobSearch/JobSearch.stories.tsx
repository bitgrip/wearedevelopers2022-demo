import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { JobSearch } from "./JobSearch";
import { single, multi } from './JobSearch.mock';

export default {
  title: "JobSearch",
  component: JobSearch,
} as ComponentMeta<typeof JobSearch>;

export const Single: ComponentStory<typeof JobSearch> = () => (
  <JobSearch {...single} />
);
Single.parameters = {
  chromatic: { viewports: [450, 760, 1000, 1400] },
};
export const Multi: ComponentStory<typeof JobSearch> = () => (
  <JobSearch {...multi} />
);
Multi.parameters = {
  chromatic: { viewports: [450, 760, 1000, 1400] },
};
