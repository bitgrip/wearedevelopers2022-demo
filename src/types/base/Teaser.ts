import { Image } from "./Image";
import { Link } from "./Link";
import { Tag } from "./Tag";

export interface Teaser {
  title: string;
  abstract: string;
  link: Link;
  image?: Image;
  tags?: Tag[];
}
