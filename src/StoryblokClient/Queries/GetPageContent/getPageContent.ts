import values from "lodash/values";
import toString from "lodash/toString";
import { ApiClientResponse } from "../../ApiClientResponse";
import { Page } from "../../../types/layout/Page";
import { executePageContentQuery } from "./executePageContentQuery";
import { mapCmsPageItemToPage } from "./Transformers/mapCmsPageItemToPage";

export interface PageContentQuery {
  slug: string;
}

export interface PageContentResponse extends ApiClientResponse {
  data: Page | null;
}

export const getPageContent = async (
  query?: PageContentQuery
): Promise<PageContentResponse> => {
  try {
    console.debug(`Execute cms.getPageContent(${toString(values(query))})`);

    // fetch data
    const pageContentResponseData = await executePageContentQuery(
      query?.slug as string
    );

    // map page content data
    const page: Page = mapCmsPageItemToPage(pageContentResponseData.PageItem);

    return {
      status: 200,
      data: page,
    };
  } catch (error) {
    console.error((error as Error).message);
    return { status: 500, data: null };
  }
};
