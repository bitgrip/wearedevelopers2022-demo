import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Content } from "./Content";
import { ContentMock } from "./Content.mock";

export default {
  title: "Content",
  component: Content,
} as ComponentMeta<typeof Content>;

export const Primary: ComponentStory<typeof Content> = () => (
  <Content element={ ContentMock } />
);
Primary.parameters = {
  chromatic: { viewports: [450, 760, 1000, 1400] },
};
Primary.story = { name: "Content" };
