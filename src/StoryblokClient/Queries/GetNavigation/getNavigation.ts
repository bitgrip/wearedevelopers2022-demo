import values from "lodash/values";
import toString from "lodash/toString";
import { ApiClientResponse } from "../../ApiClientResponse";
import {
  Navigation,
  NavigationItem,
} from "../../../types/Navigation/Navigation";
import { getMainMenu } from "./__generated__/getMainMenu";
import { mapCmsMainMenuToNavigation } from "./Transformers/mapCmsMainMenuToNavigation";
import { getHomeMenuItem_PageItem } from "./__generated__/getHomeMenuItem";
import { mapCmsHomeItemoNavigationItem } from "./Transformers/mapCmsHomeItemoNavigationItem";
import { executeHomeMenuItemQuery } from "./executeHomeMenuItemQuery";
import { executeMainMenuQuery } from "./executeMainMenuQuery";

export interface NavigationQuery {
  site: string;
}

export interface NavigationResponse extends ApiClientResponse {
  data: Navigation | null;
}

export const getNavigation = async (
  query?: NavigationQuery
): Promise<NavigationResponse> => {
  try {
    console.debug(`Execute cms.getNavigation(${toString(values(query))})`);

    // fetch data
    const [homeItemResponseData, navItemsResponseData] = await Promise.all([
      executeHomeMenuItemQuery(),
      executeMainMenuQuery(),
    ]);

    // map home menu item data
    const homeItem: NavigationItem = mapCmsHomeItemoNavigationItem(
      homeItemResponseData?.PageItem as getHomeMenuItem_PageItem
    );

    // map nav items data
    const navItems: NavigationItem[] = mapCmsMainMenuToNavigation(
      navItemsResponseData as getMainMenu
    );

    // compose typed navigation
    const nav: Navigation = {
      ...homeItem,
      children: navItems,
    };

    return {
      status: 200,
      data: nav,
    };
  } catch (error) {
    console.error((error as Error).message);
    return { status: 500, data: null };
  }
};
