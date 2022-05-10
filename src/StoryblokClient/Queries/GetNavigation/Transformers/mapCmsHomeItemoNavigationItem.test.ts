import { mockHomePage } from "../Mocks/Navigation.mock";
import { mapCmsMainMenuItemToNavigationItem } from "./mapCmsMainMenuItemToNavigationItem";

/**
 * @group cms/types
 */
describe("should transform a cms home item into an app navigation item type", () => {
  test("transform root item", () => {
    const navItem = mapCmsMainMenuItemToNavigationItem(mockHomePage);
    expect(navItem).toHaveProperty(
      "id",
      "f0548537-e8d3-4815-a6db-3d70745cc717"
    );
    expect(navItem).toHaveProperty("slug", "home");
    expect(navItem).toHaveProperty("name", "Home");
  });
});
