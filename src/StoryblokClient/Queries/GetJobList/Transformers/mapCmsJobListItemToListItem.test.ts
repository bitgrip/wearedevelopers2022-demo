import { IListElement } from "../../../../types/elements/List";
import { mockJobOffer } from "../Mocks/cmsJobListItems.mock";
import { mapCmsJobListItemToListItem } from "./mapCmsJobListItemToListItem";

/**
 * @group unit/cms/types
 */
describe("should transform a cms job list item into a list element type", () => {
  test("transform joboffer list item", () => {
    const listElement: IListElement = mapCmsJobListItemToListItem(mockJobOffer);
    expect(listElement).toHaveProperty("jobid", "id123");
    expect(listElement).toHaveProperty("title", "Senior Frontend Developer");
    expect(listElement).toHaveProperty("link", "https://bitgrip.com/jobs");
    expect(listElement).toHaveProperty("tag", "frontend");
    expect(listElement).toHaveProperty("key", "frontend");
  });
});
