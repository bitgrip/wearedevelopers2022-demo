import { IListElement } from "../../../../types/elements/List";
import { getJobListQueryResponseDataMock } from "../Mocks/getJobListQuery.mock";
import { mapCmsPageItemToListItems } from "./mapCmsPageItemToListItems";

/**
 * @group unit/cms/types
 */
describe("should transform a cms page item list of jobs into a list element array", () => {
  test("transform page items to joboffer list", () => {
    const listElementArray: IListElement[] = mapCmsPageItemToListItems(
      getJobListQueryResponseDataMock.data
    );
    expect(listElementArray).toHaveLength(2);
  });
});
