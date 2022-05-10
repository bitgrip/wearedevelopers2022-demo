import { cmsClient } from "../../ApolloClient";
import { getPageContentQuery } from "./getPageContentQuery";
import { getPageContentQueryResponseDataMock } from "./Mocks/getPageContentQuery.mock";

export const executePageContentQuery = async (slug: string): Promise<any> => {
  if (process.env.NEXT_PUBLIC_DEV_MODE === "offline") {
    return getPageContentQueryResponseDataMock.data;
  }

  return cmsClient
    .query({
      query: getPageContentQuery,
      variables: {
        slug: slug,
      },
    })
    .then((response) => {
      return response.data;
    });
};
