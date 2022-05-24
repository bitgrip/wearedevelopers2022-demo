import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Headline } from "./Headline";
import {
  DefaultH1ContentMock,
  DefaultH2ContentMock,
  DefaultH3ContentMock,
  DefaultH4ContentMock,
  DefaultH5ContentMock,
  SonderzeichenContentMock
} from "./Headline.mock";

export default {
  title: "Atom/Headline",
  component: Headline,
} as ComponentMeta<typeof Headline>;

export const Primary: ComponentStory<typeof Headline> = () => (
  <Headline content={ DefaultH1ContentMock } level='h1' />
);
Primary.story = { name: "H1" };

export const Secondary: ComponentStory<typeof Headline> = () => (
  <Headline content={ DefaultH2ContentMock } level='h2' />
);
Secondary.story = { name: "H2" };

export const Third: ComponentStory<typeof Headline> = () => (
  <Headline content={ DefaultH3ContentMock } level='h3' />
);
Third.story = { name: "H3" };

export const Fourth: ComponentStory<typeof Headline> = () => (
  <Headline content={ DefaultH4ContentMock } level='h4' />
);
Fourth.story = { name: "H4" };

export const Fifth: ComponentStory<typeof Headline> = () => (
  <Headline content={ DefaultH5ContentMock } level='h5' />
);
Fifth.story = { name: "H5" };

export const Sonderzeichen: ComponentStory<typeof Headline> = () => (
  <Headline content={ SonderzeichenContentMock } />
);
Sonderzeichen.args = {
  content:
    'Headline mit Sonderzeichen<br/>< > " ÄÖÜäöüß «‹»›„“‟”’"❝❞❮❯〞〟＂‚‘‛❛❜\n<em>Und</em> <i>formatierter</i> <sub>Headline</sub> <sup>Content</sup><br/>mit <span>Text im span</span> 👍<br/>',
};