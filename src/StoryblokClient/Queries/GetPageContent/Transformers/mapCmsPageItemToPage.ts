import { Page } from "../../../../types/layout/Page";
import {
  getPageContent_PageItem,
  getPageContent_PageItem_content,
} from "../__generated__/getPageContent";
import { mapCmsPageContentToContentElements } from "./mapCmsPageContentToContentElements";

export const mapCmsPageItemToPage = (
  pageItem: getPageContent_PageItem
): Page => {
  return {
    id: pageItem.uuid as string,
    slug: pageItem.full_slug as string,
    title: pageItem.name as string,
    content: mapCmsPageContentToContentElements(
      pageItem.content as getPageContent_PageItem_content
    ),
  };
};
