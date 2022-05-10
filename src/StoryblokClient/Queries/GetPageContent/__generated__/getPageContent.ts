/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPageContent
// ====================================================

export interface getPageContent_PageItem_content {
  __typename: "PageComponent";
  body: any | null;
  component: string | null;
}

export interface getPageContent_PageItem {
  __typename: "PageItem";
  uuid: string | null;
  full_slug: string | null;
  name: string | null;
  content: getPageContent_PageItem_content | null;
}

export interface getPageContent {
  PageItem: getPageContent_PageItem | null;
}

export interface getPageContentVariables {
  slug: string;
}
