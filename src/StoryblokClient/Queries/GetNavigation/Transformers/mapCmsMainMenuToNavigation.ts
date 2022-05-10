import { NavigationItem } from "../../../../types/Navigation/Navigation";
import {
  getMainMenu,
  getMainMenu_PageItems_items,
} from "../__generated__/getMainMenu";
import { mapCmsMainMenuItemToNavigationItem } from "./mapCmsMainMenuItemToNavigationItem";

/**
 * Maps a cms main menu query result (generated) into a Navigation entity type.
 * @param site GetAllSites_content_sites
 * @returns Site
 */
export const mapCmsMainMenuToNavigation = (
  responseData: getMainMenu
): NavigationItem[] => {
  if (!responseData?.PageItems) {
    throw new Error(
      "[mapCmsMainMenuToNavigation] Type mapping error: given main menu data does not contain any valid data."
    );
  }

  // build 1st level children, always return an array
  const children: NavigationItem[] =
    responseData?.PageItems?.items?.map((item) => {
      return mapCmsMainMenuItemToNavigationItem(
        item as getMainMenu_PageItems_items
      );
    }) || [];

  return children;
};
