import { mockMainMenu } from "../Mocks/Navigation.mock";
import { mapCmsMainMenuToNavigation } from "./mapCmsMainMenuToNavigation";

/**
 * @group cms/types
 */
describe("should transform a cms menu into an app navigation type", () => {
  test("transform root item", () => {
    const mainMenu = mapCmsMainMenuToNavigation(mockMainMenu);

    const menuItemOne = mainMenu.children[0];
    const menuItemTwo = mainMenu.children[1];

    expect(mainMenu.children).toHaveLength(2);
    expect(menuItemOne).toHaveProperty("slug", "jobs/");
    expect(menuItemTwo).toHaveProperty("slug", "references/");
  });
});
