import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HeaderSection } from "./HeaderSection";
import { Navigation } from "../../Types/Navigation/Navigation";

export default {
  title: "Header Section",
  component: HeaderSection,
} as ComponentMeta<typeof HeaderSection>;

const navigation: Navigation = {
  id: "123",
  name: "Home",
  slug: "/",
  children: [
    { id: "234", name: "About", slug: "/about" },
    { id: "234", name: "Jobs", slug: "/jobs" },
  ],
};

export const Primary: ComponentStory<typeof HeaderSection> = () => (
  <HeaderSection navigation={navigation}>HeaderSection</HeaderSection>
);
Primary.parameters = {
  chromatic: { viewports: [450, 760, 1000, 1400] },
};
