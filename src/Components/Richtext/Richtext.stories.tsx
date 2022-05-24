import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Richtext } from "./Richtext";
import { RichtextLongMock, RichtextShortMock } from "./Richtext.mock";

export default {
  title: "Atom/Richtext",
  component: Richtext,
} as ComponentMeta<typeof Richtext>;

export const ShortText: ComponentStory<typeof Richtext> = () => (
  <Richtext content={ RichtextShortMock } />
);
ShortText.parameters = {
  chromatic: { viewports: [450, 760, 1000, 1400] },
};
ShortText.story = { name: "Short Text" };

export const LongText: ComponentStory<typeof Richtext> = () => (
  <Richtext content={ RichtextLongMock } />
);
LongText.parameters = {
  chromatic: { viewports: [450, 760, 1000, 1400] },
};
LongText.story = { name: "Long Text" };
