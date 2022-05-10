interface IListElement {
  key: string;
  link: string;
  tag: string;
  title: string;
}

export interface IList {
  list: IListElement[];
}
