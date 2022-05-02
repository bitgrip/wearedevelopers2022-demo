import { ContentElement } from "../../../../Types/layout/ContentElement";
import { getPageContent_content_pageByPath_grid_placements_items } from "../__generated__/getPageContent";

// TODO: here the mapping loginc will become a little more complex
export const mapCoreMediaPlacementItem2ContentElement = (
  responseData: getPageContent_content_pageByPath_grid_placements_items
): ContentElement => {
  return {
    id: responseData.id,
    type: responseData.type,
    data: {
      title: responseData.title,
    },
  };
};
