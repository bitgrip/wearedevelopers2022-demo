import values from "lodash/values";
import toString from "lodash/toString";
import { ApiClientResponse } from "../../ApiClientResponse";
import { coreMediaClient } from "../../ApolloClient";
import { Navigation } from "../../../Types/Navigation/Navigation";
import { getMainMenuQuery } from "./getMainMenuQuery";
import { getMainMenu } from "./__generated__/getMainMenu";
import { mapCoreMediaMainMenuToNavigation } from "./Transformers/mapCoreMediaMainMenuToNavigation";

export interface NavigationQuery {
  site: string;
}

export interface NavigationResponse extends ApiClientResponse {
  data: Navigation | null;
}

export const getNavigation = async (
  query: NavigationQuery
): Promise<NavigationResponse> => {
  try {
    console.debug(
      `Execute CoreMedia.getNavigation(${toString(values(query))})`
    );

    const nav: Navigation = await coreMediaClient
      .query({
        query: getMainMenuQuery,
        variables: { siteSegment: process.env.NEXT_PUBLIC_SITE },
      })
      .then((response) => {
        const responseData: getMainMenu = response.data as getMainMenu;
        if (!responseData || !responseData.content)
          throw new Error("Received no data in getNavigation.");
        const resnav: Navigation = mapCoreMediaMainMenuToNavigation(
          responseData.content
        );
        return resnav;
      });

    return {
      status: 200,
      data: nav,
    };
  } catch (error) {
    console.error((error as Error).message);
    return { status: 500, data: null };
  }
};
