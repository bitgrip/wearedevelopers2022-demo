import slugify from "slugify";
import { NavigationItem } from "../../../../types/Navigation/Navigation";
import { getHomeMenuItem_PageItem } from "../__generated__/getHomeMenuItem";

/**
 * Maps a Cms navigationPath item - mostly CMChannel - (generated) into a NavigationItem entity type.
 * @returns NavigationItem
 */
export const mapCmsHomeItemoNavigationItem = (
  navigationItem: getHomeMenuItem_PageItem
): NavigationItem => {
  if (!navigationItem?.uuid || !navigationItem?.full_slug) {
    throw new Error(
      "Type mapping error: given cms navigationPath record does not contain any valid data."
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
