import { cmsClient } from "../../ApolloClient";
import { getHomeMenuItemQuery } from "./getHomeMenuItemQuery";
import { getHomeMenuItemQueryResponseDataMock } from "./Mocks/getHomeMenuItemQuery.mock";

export const executeHomeMenuItemQuery = async (): Promise<any> => {
  if (process.env.NEXT_PUBLIC_DEV_MODE === "offline") {
    return getHomeMenuItemQueryResponseDataMock.data;
  }

  return cmsClient
    .query({
      query: getHomeMenuItemQuery,
    })
    .then((response) => {
      return response.data;
    });
};
