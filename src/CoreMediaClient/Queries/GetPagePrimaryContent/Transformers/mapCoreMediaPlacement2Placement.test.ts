import { Placement } from "../../../../types/layout/Placement";
import { MockPlacementStub } from "../Mocks/MainPlacement.mock";
import { mapCoreMediaPlacement2Placement } from "./mapCoreMediaPlacement2Placement";

/**
 * @group coremedia/types
 */
describe("should transform a core media placement into a placement type", () => {
  test("returns transformed ...", () => {
    const result: Placement =
      mapCoreMediaPlacement2Placement(MockPlacementStub);
    const resultData: any = result.items;

    expect(result).toHaveProperty("name", MockPlacementStub.name);
    expect(resultData).toHaveLength(4);
  });
});
