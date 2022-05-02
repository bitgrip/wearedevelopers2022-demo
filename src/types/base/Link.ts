export type LinkTarget = "self" | "blank";

export interface Link {
  label: string;
  info?: string;
  href: string;
  target?: LinkTarget;
}
