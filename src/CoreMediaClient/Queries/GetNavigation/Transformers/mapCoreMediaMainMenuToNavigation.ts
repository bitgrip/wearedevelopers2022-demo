import {
  Navigation,
  NavigationItem,
} from "../../../../Types/Navigation/Navigation";
import {
  getMainMenu_content,
  getMainMenu_content_site_root,
  getMainMenu_content_site_root_children,
  getMainMenu_content_site_root_navigationPath,
} from "../__generated__/getMainMenu";
import { mapCoreMediaMainMenuItemToNavigationItem } from "./mapCoreMediaMainMenuItemToNavigationItem";

/**
 * Maps a CoreMedia main menu query result (generated) into a Navigation entity type.
 * @param site GetAllSites_content_sites
 * @returns Site
 */
export const mapCoreMediaMainMenuToNavigation = (
  responseData: getMainMenu_content
): Navigation => {
  if (!responseData?.site?.root) {
    throw new Error(
      "[mapCoreMediaMainMenuToNavigation] Type mapping error: given Coremedia site record does not contain any data."
    );
  }

  const siteRoot: getMainMenu_content_site_root = responseData.site.root;
  // build root
  const root: NavigationItem = mapCoreMediaMainMenuItemToNavigationItem(
    siteRoot
      ?.navigationPath?.[0] as getMainMenu_content_site_root_navigationPath
  );

  if (!root)
    throw new Error(
      "[mapCoreMediaMainMenuToNavigation] Type mapping error: given Coremedia site record does not contain a valid root segment."
    );

  // build 1st level children, always return an array
  const children: NavigationItem[] =
    siteRoot?.children?.map((item) => {
      return mapCoreMediaMainMenuItemToNavigationItem(
        item as getMainMenu_content_site_root_children
      );
    }) || [];

  const mainMenu: Navigation = {
    ...root,
    children: children,
  };

  return mainMenu;
};
