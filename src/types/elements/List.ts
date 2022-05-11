import { IContentElement } from "../layout/ContentElement";

export interface IListElement {
  key: string;
  link: string;
  tag: string;
  title: string;
}

export interface IList extends IContentElement {
  list: IListElement[];
}
