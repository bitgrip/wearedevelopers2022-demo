import { Placement } from "./Placement";

export interface Page {
  id: string;
  slug: string;
  title: string;
  stage?: Placement[];
  content?: Placement[];
  engagement?: Placement[];
}
