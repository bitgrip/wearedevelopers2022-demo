import { IList } from "./List";

export interface IJobSearch extends IList {
  filterList?: { id: string; label: string; isChecked?: boolean }[];
 }