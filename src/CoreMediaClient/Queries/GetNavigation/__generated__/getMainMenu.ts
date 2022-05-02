/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMainMenu
// ====================================================

export interface getMainMenu_content_site_root_navigationPath_link {
  __typename: "Link";
  id: string;
}

export interface getMainMenu_content_site_root_navigationPath {
  __typename: "CMAbstractCategoryImpl" | "CMArticleImpl" | "CMAudioImpl" | "CMChannelImpl" | "CMCollectionImpl" | "CMDownloadImpl" | "CMDynamicListImpl" | "CMExternalChannelImpl" | "CMExternalLinkImpl" | "CMExternalPageImpl" | "CMExternalProductImpl" | "CMGalleryImpl" | "CMHTMLImpl" | "CMImageMapImpl" | "CMInteractiveImpl" | "CMLinkableImpl" | "CMLocTaxonomyImpl" | "CMMediaImpl" | "CMNavigationImpl" | "CMPersonImpl" | "CMPictureImpl" | "CMPlaceholderImpl" | "CMProductImpl" | "CMProductListImpl" | "CMProductTeaserImpl" | "CMQueryListImpl" | "CMSelectionRulesImpl" | "CMSpinnerImpl" | "CMTaxonomyImpl" | "CMTeasableImpl" | "CMTeaserImpl" | "CMVideoImpl" | "CMVisualImpl";
  title: string | null;
  segment: string | null;
  link: getMainMenu_content_site_root_navigationPath_link | null;
}

export interface getMainMenu_content_site_root_children_link {
  __typename: "Link";
  id: string;
}

export interface getMainMenu_content_site_root_children {
  __typename: "CMAbstractCategoryImpl" | "CMArticleImpl" | "CMAudioImpl" | "CMChannelImpl" | "CMCollectionImpl" | "CMDownloadImpl" | "CMDynamicListImpl" | "CMExternalChannelImpl" | "CMExternalLinkImpl" | "CMExternalPageImpl" | "CMExternalProductImpl" | "CMGalleryImpl" | "CMHTMLImpl" | "CMImageMapImpl" | "CMInteractiveImpl" | "CMLinkableImpl" | "CMLocTaxonomyImpl" | "CMMediaImpl" | "CMNavigationImpl" | "CMPersonImpl" | "CMPictureImpl" | "CMPlaceholderImpl" | "CMProductImpl" | "CMProductListImpl" | "CMProductTeaserImpl" | "CMQueryListImpl" | "CMSelectionRulesImpl" | "CMSpinnerImpl" | "CMTaxonomyImpl" | "CMTeasableImpl" | "CMTeaserImpl" | "CMVideoImpl" | "CMVisualImpl";
  title: string | null;
  segment: string | null;
  link: getMainMenu_content_site_root_children_link | null;
}

export interface getMainMenu_content_site_root {
  __typename: "CMAbstractCategoryImpl" | "CMChannelImpl" | "CMExternalChannelImpl" | "CMExternalPageImpl" | "CMNavigationImpl";
  navigationPath: (getMainMenu_content_site_root_navigationPath | null)[] | null;
  children: (getMainMenu_content_site_root_children | null)[] | null;
}

export interface getMainMenu_content_site {
  __typename: "Site";
  root: getMainMenu_content_site_root | null;
}

export interface getMainMenu_content {
  __typename: "ContentRoot";
  /**
   * Dedicated `site` query, returning a content object of type `Site`, matching the given site id.
   */
  site: getMainMenu_content_site | null;
}

export interface getMainMenu {
  /**
   * The content root.
   */
  content: getMainMenu_content | null;
}

export interface getMainMenuVariables {
  siteSegment: string;
}
