/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getJobList
// ====================================================

export interface getJobList_JobItems_items_content_external_link {
  __typename: "Link";
  url: string;
}

export interface getJobList_JobItems_items_content {
  __typename: "JobComponent";
  external_link: getJobList_JobItems_items_content_external_link | null;
  tag: (string | null)[] | null;
}

export interface getJobList_JobItems_items {
  __typename: "JobItem";
  uuid: string | null;
  name: string | null;
  content: getJobList_JobItems_items_content | null;
}

export interface getJobList_JobItems {
  __typename: "JobItems";
  items: (getJobList_JobItems_items | null)[] | null;
}

export interface getJobList {
  JobItems: getJobList_JobItems | null;
}
