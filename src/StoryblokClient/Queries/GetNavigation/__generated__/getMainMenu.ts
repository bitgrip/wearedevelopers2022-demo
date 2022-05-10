/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMainMenu
// ====================================================

export interface getMainMenu_PageItems_items {
  __typename: "PageItem";
  uuid: string | null;
  full_slug: string | null;
  name: string | null;
  position: number | null;
  parent_id: number | null;
}

export interface getMainMenu_PageItems {
  __typename: "PageItems";
  items: (getMainMenu_PageItems_items | null)[] | null;
}

export interface getMainMenu {
  PageItems: getMainMenu_PageItems | null;
}
