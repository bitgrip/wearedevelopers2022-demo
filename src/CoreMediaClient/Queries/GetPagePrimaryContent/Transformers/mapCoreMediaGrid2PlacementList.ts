import { Placement } from "../../../../types/layout/Placement";
import {
  getPageContent_content_pageByPath_grid,
  getPageContent_content_pageByPath_grid_placements,
} from "../__generated__/getPageContent";
import { mapCoreMediaPlacement2Placement } from "./mapCoreMediaPlacement2Placement";

export const mapCoreMediaGrid2PlacementList = (
  responseData: getPageContent_content_pageByPath_grid
): Placement[] => {
  const placements: getPageContent_content_pageByPath_grid_placements[] =
    (responseData.placements as getPageContent_content_pageByPath_grid_placements[]) ||
    [];
  return placements.map((placement) => {
    return mapCoreMediaPlacement2Placement(placement);
  });
};
