import slugify from "slugify";
import { NavigationItem } from "../../../../Types/Navigation/Navigation";
import {
  getMainMenu_content_site_root_children,
  getMainMenu_content_site_root_navigationPath,
} from "../__generated__/getMainMenu";

/**
 * Maps a CoreMedia navigationPath item - mostly CMChannel - (generated) into a NavigationItem entity type.
 * @param navigationPath getMainMenu_content_site_root_navigationPath | getMainMenu_content_site_root_children
 * @returns NavigationItem
 */
export const mapCoreMediaMainMenuItemToNavigationItem = (
  navigationItem:
    | getMainMenu_content_site_root_navigationPath
    | getMainMenu_content_site_root_children
): NavigationItem => {
  if (!navigationItem?.link?.id || !navigationItem?.title) {
    throw new Error(
      "Type mapping error: given Coremedia navigationPath record does not contain any data."
    );
  }

  const slug: string =
    navigationItem.segment ||
    slugify(navigationItem.title as string, {
      lower: true,
      strict: true,
      trim: true,
    });

  return {
    id: navigationItem.link?.id as string,
    name: navigationItem.title as string,
    slug: slug,
  };
};
