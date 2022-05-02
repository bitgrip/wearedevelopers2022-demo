import { Placement } from "../../../../Types/layout/Placement";
import { getPageContent_content_pageByPath_grid_placements } from "../__generated__/getPageContent";
import { mapCoreMediaPlacementItem2ContentElement } from "./mapCoreMediaPlacementItem2ContentElement";

export const mapCoreMediaPlacement2Placement = (
  responseData: getPageContent_content_pageByPath_grid_placements
): Placement => {
  return {
    name: responseData.name,
    items: responseData.items.map((item) => {
      return mapCoreMediaPlacementItem2ContentElement(item);
    }),
  };
};
