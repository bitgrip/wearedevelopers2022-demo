import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./Header";

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;


export const Primary: ComponentStory<typeof Header> = () => (
  <Header />
);
Primary.parameters = {
  chromatic: { viewports: [450, 760, 1000, 1400] },
};
Primary.story = { name: 'Header' };
