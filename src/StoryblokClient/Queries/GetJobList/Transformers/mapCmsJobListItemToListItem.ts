import { IListElement } from "../../../../types/elements/List";
import { getJobList_JobItems_items } from "../__generated__/getJobList";
import { mapTags } from "./mapTags";

export const mapCmsJobListItemToListItem = (
  jobListItem: getJobList_JobItems_items
): IListElement => {
  const listElement: IListElement = {
    jobid: jobListItem.uuid as string,
    key: mapTags(jobListItem.content?.tag) || "",
    link: jobListItem.content?.external_link?.url as string,
    tag: mapTags(jobListItem.content?.tag) || "",
    title: jobListItem.name as string,
  };
  return listElement;
};
