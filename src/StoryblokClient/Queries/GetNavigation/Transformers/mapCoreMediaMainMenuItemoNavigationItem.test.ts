import {
  MockCMLinkableSiteChildren,
  MockCMLinkableSiteRoot,
  MockCMLinkableSiteRootMissingSegment,
} from "../Mocks/NavigationItem.mock";
import { mapCoreMediaMainMenuItemToNavigationItem } from "./mapCoreMediaMainMenuItemToNavigationItem";

/**
 * @group coremedia/types
 */
describe("should transform a core media root menu item into an app navigation type", () => {
  test("transform root item", () => {
    const navItem = mapCoreMediaMainMenuItemToNavigationItem(
      MockCMLinkableSiteRoot
    );
    expect(navItem).toHaveProperty("id", "10100");
    expect(navItem).toHaveProperty("slug", "home");
    expect(navItem).toHaveProperty("name", "Home");
  });
  test("transform root item without segment", () => {
    const navItem = mapCoreMediaMainMenuItemToNavigationItem(
      MockCMLinkableSiteRootMissingSegment
    );
    expect(navItem).toHaveProperty("id", "10100");
    expect(navItem).toHaveProperty("slug", "home-without-segment");
    expect(navItem).toHaveProperty("name", "Home Without Segment");
  });
});

describe("should transform a core media main menu child item into an app navigation type", () => {
  test("transform child item", () => {
    const navItem = mapCoreMediaMainMenuItemToNavigationItem(
      MockCMLinkableSiteChildren[0]
    );
    expect(navItem).toHaveProperty("id", "10200");
    expect(navItem).toHaveProperty("slug", "pupils");
    expect(navItem).toHaveProperty("name", "Pupils");
  });
  test("transform child item without segment", () => {
    const navItem = mapCoreMediaMainMenuItemToNavigationItem(
      MockCMLinkableSiteChildren[1]
    );
    expect(navItem).toHaveProperty("id", "10300");
    expect(navItem).toHaveProperty("slug", "students-without-segment");
    expect(navItem).toHaveProperty("name", "Students Without Segment");
  });
});
