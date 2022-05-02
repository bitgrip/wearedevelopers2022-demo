import { ContentElement } from "../../../../Types/layout/ContentElement";
import { MockPlacementItemStub } from "../Mocks/MainPlacement.mock";
import { mapCoreMediaPlacementItem2ContentElement } from "./mapCoreMediaPlacementItem2ContentElement";

/**
 * @group coremedia/types
 */
describe("should transform a core media placement item into a content element type", () => {
  test("returns transformed content element", () => {
    const result: ContentElement = mapCoreMediaPlacementItem2ContentElement(
      MockPlacementItemStub
    );
    const resultData: any = result.data;
    expect(result).toHaveProperty("id", MockPlacementItemStub.id);
    expect(result).toHaveProperty("type", MockPlacementItemStub.type);
    expect(resultData).toHaveProperty("title", MockPlacementItemStub.title);
  });
});
