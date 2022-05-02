import { Placement } from "../../../../Types/layout/Placement";
import { MockGridStub } from "../Mocks/MainPlacement.mock";
import { mapCoreMediaGrid2PlacementList } from "./mapCoreMediaGrid2PlacementList";

/**
 * @group coremedia/types
 */
describe("should transform a core media grid into an array of typed placements", () => {
  test("returns transformed ...", () => {
    const result: Placement[] = mapCoreMediaGrid2PlacementList(MockGridStub);
    expect(result).toHaveLength(5);
  });
});
