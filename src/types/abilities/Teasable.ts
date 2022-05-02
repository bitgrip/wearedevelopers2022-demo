import { Teaser } from "../base/Teaser";
import { Linkable } from "./Linkable";

export interface Teasable extends Linkable {
  teaser: Teaser;
}
