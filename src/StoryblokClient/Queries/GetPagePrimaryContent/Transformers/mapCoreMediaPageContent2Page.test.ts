import { Page } from "../../../../types/layout/Page";
import { MockPageStub } from "../Mocks/Page.mock";
import { mapCoreMediaPageContent2Page } from "./mapCoreMediaPageContent2Page";

/**
 * @group coremedia/types
 */
describe("should transform a core media page content into a page type", () => {
  test("returns transformed page", () => {
    const result: Page = mapCoreMediaPageContent2Page(MockPageStub);

    expect(result).toHaveProperty("id", MockPageStub.id);
    // expect(result).toHaveProperty("slug", MockPageStub.);
    expect(result).toHaveProperty("title", MockPageStub.title);
    expect(result.stage).toHaveLength(1);
    expect(result.content).toHaveLength(4);
    expect(result.engagement).toHaveLength(0);
  });
});
