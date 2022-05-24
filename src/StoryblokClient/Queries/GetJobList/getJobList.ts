import values from "lodash/values";
import toString from "lodash/toString";
import { ApiClientResponse } from "../../ApiClientResponse";
import { IListElement } from "../../../types/elements/List";
import { executeJobListQuery } from "./executeJobListQuery";
import { mapCmsPageItemToListItems } from "./Transformers/mapCmsPageItemToListItems";

export interface JobListQuery {
  slug: string;
}

export interface JobListResponse extends ApiClientResponse {
  status: number;
  results?: number;
  data: IListElement[] | null;
}

export const getJobList = async (
  query?: JobListQuery
): Promise<JobListResponse> => {
  try {
    console.debug(`Execute cms.getJobList(${toString(values(query))})`);

    // fetch data
    const JobListResponseData = await executeJobListQuery();

    // map page content data
    const jobList: IListElement[] =
      mapCmsPageItemToListItems(JobListResponseData);

    return {
      status: 200,
      results: jobList.length,
      data: jobList,
    };
  } catch (error) {
    console.error((error as Error).message);
    return { status: 500, data: null };
  }
};
