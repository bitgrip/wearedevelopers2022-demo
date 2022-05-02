/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllSites
// ====================================================

export interface GetAllSites_content_sites_root {
  __typename: "CMAbstractCategoryImpl" | "CMChannelImpl" | "CMExternalChannelImpl" | "CMExternalPageImpl" | "CMNavigationImpl";
  segment: string | null;
}

export interface GetAllSites_content_sites {
  __typename: "Site";
  id: string;
  name: string;
  locale: string;
  root: GetAllSites_content_sites_root | null;
}

export interface GetAllSites_content {
  __typename: "ContentRoot";
  /**
   * The `sites` query delivers an array of type `Site` of all known sites in the content repository w/o any parameter necessary.
   */
  sites: (GetAllSites_content_sites | null)[];
}

export interface GetAllSites {
  /**
   * The content root.
   */
  content: GetAllSites_content | null;
}
