/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getHomeMenuItem
// ====================================================

export interface getHomeMenuItem_PageItem {
  __typename: "PageItem";
  uuid: string | null;
  full_slug: string | null;
  name: string | null;
  position: number | null;
  parent_id: number | null;
}

export interface getHomeMenuItem {
  PageItem: getHomeMenuItem_PageItem | null;
}
