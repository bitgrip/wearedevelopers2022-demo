import { Teasable } from "../abilities/Teasable";
import { Image } from "../base/Image";
import { Tag } from "../base/Tag";

export interface Product extends Teasable {
  sku: string;
  price: number;
  currency: string;
  unit: string;
  title: string;
  subtitle?: string;
  abstract: string;
  details?: object[];
  images?: Image[];
  tags?: Tag[];
}
