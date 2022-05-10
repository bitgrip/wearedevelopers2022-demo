import { mockMainMenu } from "../Mocks/Navigation.mock";
import { mapCmsMainMenuToNavigation } from "./mapCmsMainMenuToNavigation";

/**
 * @group cms/types
 */
describe("should transform a cms menu into an app navigation type", () => {
  test("transform root item", () => {
    const mainMenuItems = mapCmsMainMenuToNavigation(mockMainMenu);
    const menuItemOne = mainMenuItems[0];
    const menuItemTwo = mainMenuItems[1];
    expect(mainMenuItems).toHaveLength(2);
    expect(menuItemOne).toHaveProperty("slug", "jobs/");
    expect(menuItemTwo).toHaveProperty("slug", "references/");
  });
});
