import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Footer } from "./Footer";

export default {
  title: "Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const Primary: ComponentStory<typeof Footer> = () => (
  <Footer />
);
Primary.parameters = {
  chromatic: { viewports: [450, 760, 1000, 1400] },
};
Primary.story = {name: "Footer"};
