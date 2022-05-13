import { contentPage } from "../Mocks/page.mock";
import { mapCmsPageItemToPage } from "./mapCmsPageItemToPage";

/**
 * @group cms/types
 */
describe("should transform a cms page item into an app page item type", () => {
  test("transform page item", () => {
    const page = mapCmsPageItemToPage(contentPage);
    expect(page).toHaveProperty("id", "b9ce7e90-ed21-4547-98f3-70c01c1dfbcb");
    expect(page).toHaveProperty("slug", "jobs/");
    expect(page).toHaveProperty("title", "Job Offers");
  });
});
