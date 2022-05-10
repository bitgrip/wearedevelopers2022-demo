import slugify from "slugify";
import { NavigationItem } from "../../../../types/Navigation/Navigation";
import { getMainMenu_PageItems_items } from "../__generated__/getMainMenu";

/**
 * Maps a Cms navigationPath item - mostly CMChannel - (generated) into a NavigationItem entity type.
 * @param navigationPath getMainMenu_content_site_root_navigationPath | getMainMenu_content_site_root_children
 * @returns NavigationItem
 */
export const mapCmsMainMenuItemToNavigationItem = (
  navigationItem: getMainMenu_PageItems_items
): NavigationItem => {
  if (!navigationItem?.uuid || !navigationItem?.full_slug) {
    throw new Error(
      "Type mapping error: given cms navigation item record does not contain any valid data."
    );
  }

  const slug: string =
    navigationItem.full_slug ||
    slugify(navigationItem.name as string, {
      lower: true,
      strict: true,
      trim: true,
    });

  return {
    id: navigationItem.uuid as string,
    name: navigationItem.name as string,
    slug: slug,
  };
};
