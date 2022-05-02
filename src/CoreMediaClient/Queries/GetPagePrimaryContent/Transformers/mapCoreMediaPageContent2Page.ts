import { Page } from "../../../../Types/layout/Page";
import { Placement } from "../../../../Types/layout/Placement";
import {
  getPageContent_content_pageByPath,
  getPageContent_content_pageByPath_grid,
} from "../__generated__/getPageContent";
import { mapCoreMediaGrid2PlacementList } from "./mapCoreMediaGrid2PlacementList";

const StagePlacements: string[] = ["hero"];
const EngagementPlacements: string[] = ["related"];

export const mapCoreMediaPageContent2Page = (
  responseData: getPageContent_content_pageByPath
): Page => {
  const placements: Placement[] =
    mapCoreMediaGrid2PlacementList(
      responseData?.grid as getPageContent_content_pageByPath_grid
    ) || [];

  return {
    id: responseData.id,
    title: responseData.title as string,
    slug: responseData.title as string,
    stage: placements.filter((placement) =>
      StagePlacements.includes(placement.name)
    ),
    content: placements.filter(
      (placement) =>
        !StagePlacements.includes(placement.name) &&
        !EngagementPlacements.includes(placement.name)
    ),
    engagement: placements.filter((placement) =>
      EngagementPlacements.includes(placement.name)
    ),
  };
};
