import { IContentElement } from "./ContentElement";

export interface Page {
  id: string;
  slug: string;
  title: string;
  content?: IContentElement[];
}
