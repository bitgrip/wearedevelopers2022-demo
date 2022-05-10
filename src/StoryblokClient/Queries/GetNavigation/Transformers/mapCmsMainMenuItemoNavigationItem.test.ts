import { mockJobOffersPage } from "../Mocks/Navigation.mock";
import { mapCmsMainMenuItemToNavigationItem } from "./mapCmsMainMenuItemToNavigationItem";

/**
 * @group cms/types
 */
describe("should transform a cms menu item into an app navigation item type", () => {
  test("transform root item", () => {
    const navItem = mapCmsMainMenuItemToNavigationItem(mockJobOffersPage);
    expect(navItem).toHaveProperty(
      "id",
      "b9ce7e90-ed21-4547-98f3-70c01c1dfbcb"
    );
    expect(navItem).toHaveProperty("slug", "jobs/");
    expect(navItem).toHaveProperty("name", "Job Offers");
  });
});
