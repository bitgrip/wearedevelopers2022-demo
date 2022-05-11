import { IContentElement } from "../layout/ContentElement";
import { IList } from "./List";

export type FilterType = "all" | "default" | "frontend" | "backend" | "po" | "qa" | "operations" | "architecture";

export interface IFilter extends IContentElement {
  type: FilterType;
  label: string;
  isChecked?: boolean;
};
export interface IJobSearch extends IList {
  filterList?: IFilter[];
}