import { Teasable } from "../abilities/Teasable";
import { Tag } from "../base/Tag";

export type ArticleType = "content" | "press" | "blog" | "faq";

export interface Article extends Teasable {
  type?: ArticleType;
  title: string;
  subtitle?: string;
  abstract: string;
  publishDate?: Date;
  content?: object[];
  tags?: Tag[];
}
