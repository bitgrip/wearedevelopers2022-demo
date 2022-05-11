import { IContentElement } from "../layout/ContentElement";

export interface IContent extends IContentElement {
  headline: string;
  content: string;
}
