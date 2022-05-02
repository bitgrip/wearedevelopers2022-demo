import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FooterSection } from "./FooterSection";
import { Footer } from "../../Types/elements/Footer";

export default {
  title: "Footer Section",
  component: FooterSection,
} as ComponentMeta<typeof FooterSection>;

const footer: Footer = {
  id: "123",
  name: "Home",
  slug: "/",
  children: [
    { id: "456", name: "Imprint", slug: "/imprint" },
    { id: "789", name: "Privacy", slug: "/privacy" },
  ],
  copyright: "2022 Bitgrip",
};

export const Primary: ComponentStory<typeof FooterSection> = () => (
  <FooterSection footer={footer}>FooterSection</FooterSection>
);
Primary.parameters = {
  chromatic: { viewports: [450, 760, 1000, 1400] },
};
