import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Stage } from "./Stage";
import { StageMock } from "./Stage.mock";

export default {
  title: "Stage",
  component: Stage,
} as ComponentMeta<typeof Stage>;

export const Primary: ComponentStory<typeof Stage> = () => (
  <Stage element={StageMock} />
);
Primary.parameters = {
  chromatic: { viewports: [450, 760, 1000, 1400] },
};
Primary.story = { name: "Stage" };
