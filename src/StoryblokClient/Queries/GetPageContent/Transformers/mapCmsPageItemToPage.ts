import { Page } from "../../../../types/layout/Page";
import { getPageContent_PageItem } from "../__generated__/getPageContent";

export const mapCmsPageItemToPage = (
  pageItem: getPageContent_PageItem
): Page => {
  return {
    id: pageItem.uuid as string,
    slug: "jobs/",
    title: "JobOffers",
    content: [],
  };
};
