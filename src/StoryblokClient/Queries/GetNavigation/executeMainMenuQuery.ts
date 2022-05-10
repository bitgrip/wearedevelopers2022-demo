import { cmsClient } from "../../ApolloClient";
import { getMainMenuQuery } from "./getMainMenuQuery";
import { getMainMenuQueryResponseDataMock } from "./Mocks/getMainMenuQuery.mock";

export const executeMainMenuQuery = async (): Promise<any> => {
  if (process.env.NEXT_PUBLIC_DEV_MODE === "offline") {
    return getMainMenuQueryResponseDataMock.data;
  }

  return cmsClient
    .query({
      query: getMainMenuQuery,
    })
    .then((response) => {
      return response.data;
    });
};
