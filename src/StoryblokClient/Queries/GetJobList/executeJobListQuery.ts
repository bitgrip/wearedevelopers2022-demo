import { cmsClient } from "../../ApolloClient";
import { getJobListQuery } from "./getJobListQuery";
import { getJobListQueryResponseDataMock } from "./Mocks/getJobListQuery.mock";

export const executeJobListQuery = async (): Promise<any> => {
  if (process.env.NEXT_PUBLIC_DEV_MODE === "offline") {
    return getJobListQueryResponseDataMock.data;
  }

  return cmsClient
    .query({
      query: getJobListQuery,
    })
    .then((response) => {
      return response.data;
    });
};
