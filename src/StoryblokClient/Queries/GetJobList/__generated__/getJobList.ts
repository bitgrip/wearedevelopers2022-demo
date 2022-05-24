/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getJobList
// ====================================================

export interface getJobList_PageItems_items {
  __typename: "PageItem";
  uuid: string | null;
  full_slug: string | null;
  name: string | null;
  tag_list: (string | null)[] | null;
}

export interface getJobList_PageItems {
  __typename: "PageItems";
  items: (getJobList_PageItems_items | null)[] | null;
}

export interface getJobList {
  PageItems: getJobList_PageItems | null;
}
