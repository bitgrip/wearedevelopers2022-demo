import values from "lodash/values";
import toString from "lodash/toString";
import { ApiClientResponse } from "../../ApiClientResponse";
import { coreMediaClient } from "../../ApolloClient";
import {
  getPageContentQuery,
  PagePrimaryContentPlacementNames,
} from "./getPageContentQuery";

import { Page } from "../../../types/layout/Page";
import { mapCoreMediaPageContent2Page } from "./Transformers/mapCoreMediaPageContent2Page";

export interface PrimaryContentQuery {
  pagePath: string;
}

export interface PrimaryContentResponse extends ApiClientResponse {
  data: Page | null;
}

export const getPagePrimaryContent = async (
  query: PrimaryContentQuery
): Promise<PrimaryContentResponse> => {
  try {
    console.debug(
      `Execute CoreMedia.getPagePrimaryContent(${toString(values(query))})`
    );

    const pagePath: string =
      process.env.NEXT_PUBLIC_SITE + "/" + query.pagePath;

    console.debug("[getPagePrimaryContent] pagePath: " + pagePath);

    const pagePrimaryContent: any = await coreMediaClient
      .query({
        query: getPageContentQuery,
        variables: {
          pagePath: pagePath,
          placements: PagePrimaryContentPlacementNames,
        },
      })
      .then((response) => {
        const responseData: any = response.data;
        if (!responseData?.content?.pageByPath)
          throw new Error("Received no grid data in getPagePrimaryContent.");
        const content: any = mapCoreMediaPageContent2Page(
          responseData.content.pageByPath
        );

        return content;
      });

    return {
      status: 200,
      data: pagePrimaryContent,
    };
  } catch (error) {
    console.error((error as Error).message);
    return { status: 500, data: null };
  }
};
