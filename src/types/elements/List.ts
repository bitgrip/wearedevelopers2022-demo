import { IContentElement } from "../layout/ContentElement";

export interface IListElement {
  jobid: string;
  key: string;
  link: string;
  tag: string;
  title: string;
  apiPath?: string;
}

export interface IList extends IContentElement {
  list: IListElement[];
}
