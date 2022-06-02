import { IListElement } from "../../../../types/elements/List";
import {
  getJobList,
  getJobList_JobItems_items,
} from "../__generated__/getJobList";
import { mapCmsJobListItemToListItem } from "./mapCmsJobListItemToListItem";

export const mapCmsPageItemToListItems = (
  jobList: getJobList
): IListElement[] => {
  const mappedList: IListElement[] =
    jobList?.JobItems?.items?.map((jobListItem) => {
      return mapCmsJobListItemToListItem(
        jobListItem as getJobList_JobItems_items
      );
    }) || [];

  return mappedList;
};
