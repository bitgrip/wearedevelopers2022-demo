import { IListElement } from "../../../../types/elements/List";
import { getJobList_PageItems_items } from "../__generated__/getJobList";
import { mapTags } from "./mapTags";

export const mapCmsJobListItemToListItem = (
  jobListItem: getJobList_PageItems_items
): IListElement => {
  const listElement: IListElement = {
    jobid: jobListItem.uuid as string,
    key: mapTags(jobListItem.tag_list) || "",
    link: jobListItem.full_slug as string,
    tag: mapTags(jobListItem.tag_list) || "",
    title: jobListItem.name as string,
  };
  return listElement;
};
