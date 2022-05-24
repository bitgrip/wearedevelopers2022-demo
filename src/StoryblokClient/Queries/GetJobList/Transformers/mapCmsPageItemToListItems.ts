import { IListElement } from "../../../../types/elements/List";
import {
  getJobList,
  getJobList_PageItems_items,
} from "../__generated__/getJobList";
import { mapCmsJobListItemToListItem } from "./mapCmsJobListItemToListItem";

export const mapCmsPageItemToListItems = (
  jobList: getJobList
): IListElement[] => {
  const mappedList: IListElement[] =
    jobList?.PageItems?.items?.map((jobListItem) => {
      return mapCmsJobListItemToListItem(
        jobListItem as getJobList_PageItems_items
      );
    }) || [];

  return mappedList;
};
