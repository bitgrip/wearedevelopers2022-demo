import { FC } from "react";
import { Interweave } from "interweave";
import { IContent } from "../../types/elements/Content";
import { Richtext } from "../Richtext/Richtext";

export interface HeadlineProps {
  /**
   * Überschrift.
   *
   * Kann folgendes beinhalten:
   *
   * - Formatierungen: sub, sup, i, em
   * - Einfache Zeilenumbrüche: br, \n
   */
  content: string;
  /**
   * Überschriftenebene.
   * @default 'h2'
   */
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Headline: FC<HeadlineProps> = ({ content, level = 'h2' }) => {

  const HtmlTag = level;

  return (
    <HtmlTag>
      <Interweave content={content} />
    </HtmlTag>
  );
};
