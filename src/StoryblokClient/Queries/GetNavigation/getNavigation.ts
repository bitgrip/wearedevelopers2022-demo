import values from "lodash/values";
import toString from "lodash/toString";
import { ApiClientResponse } from "../../ApiClientResponse";
import {
  Navigation,
  NavigationItem,
} from "../../../types/Navigation/Navigation";
import { getMainMenuQuery } from "./getMainMenuQuery";
import { getMainMenu } from "./__generated__/getMainMenu";
import { mapCmsMainMenuToNavigation } from "./Transformers/mapCmsMainMenuToNavigation";
import { cmsClient } from "../../ApolloClient";
import { getHomeMenuItemQuery } from "./getHomeMenuItemQuery";
import {
  getHomeMenuItem,
  getHomeMenuItem_PageItem,
} from "./__generated__/getHomeMenuItem";
import { mapCmsHomeItemoNavigationItem } from "./Transformers/mapCmsHomeItemoNavigationItem";

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

    const homeItem: NavigationItem = await cmsClient
      .query({
        query: getHomeMenuItemQuery,
      })
      .then((response) => {
        const responseData: getHomeMenuItem = response.data as getHomeMenuItem;
        if (!responseData || !responseData)
          throw new Error(
            "Received no data for the homepage item in getNavigation."
          );
        const resnav: NavigationItem = mapCmsHomeItemoNavigationItem(
          responseData.PageItem as getHomeMenuItem_PageItem
        );
        return resnav;
      });

    const navItems: NavigationItem[] = await cmsClient
      .query({
        query: getMainMenuQuery,
        variables: { siteSegment: process.env.NEXT_PUBLIC_SITE },
      })
      .then((response) => {
        const responseData: getMainMenu = response.data as getMainMenu;
        if (!responseData || !responseData)
          throw new Error("Received no data in getNavigation.");
        const resnav: NavigationItem[] =
          mapCmsMainMenuToNavigation(responseData);
        return resnav;
      });

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
