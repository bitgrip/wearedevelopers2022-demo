export interface CMArticle {
  id: number;
  path: string;
  type: string;
  headline: string;
  subtitle?: string;
  teaserText: string;
  publishingDate?: Date;
  detailText?: object[];
  taxonomy?: string[];
}
