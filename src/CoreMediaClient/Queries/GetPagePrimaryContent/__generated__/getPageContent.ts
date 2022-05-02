/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPageContent
// ====================================================

export interface getPageContent_content_pageByPath_grid_placements_items {
  __typename: "CMAbstractCategoryImpl" | "CMArticleImpl" | "CMAudioImpl" | "CMChannelImpl" | "CMCollectionImpl" | "CMDownloadImpl" | "CMDynamicListImpl" | "CMExternalChannelImpl" | "CMExternalLinkImpl" | "CMExternalPageImpl" | "CMExternalProductImpl" | "CMGalleryImpl" | "CMHTMLImpl" | "CMImageMapImpl" | "CMInteractiveImpl" | "CMLinkableImpl" | "CMLocTaxonomyImpl" | "CMMediaImpl" | "CMNavigationImpl" | "CMPersonImpl" | "CMPictureImpl" | "CMPlaceholderImpl" | "CMProductImpl" | "CMProductListImpl" | "CMProductTeaserImpl" | "CMQueryListImpl" | "CMSelectionRulesImpl" | "CMSpinnerImpl" | "CMTaxonomyImpl" | "CMTeasableImpl" | "CMTeaserImpl" | "CMVideoImpl" | "CMVisualImpl";
  id: string;
  type: string;
  name: string;
  title: string | null;
}

export interface getPageContent_content_pageByPath_grid_placements {
  __typename: "PageGridPlacement";
  name: string;
  items: getPageContent_content_pageByPath_grid_placements_items[];
}

export interface getPageContent_content_pageByPath_grid {
  __typename: "PageGrid";
  /**
   *  retrieves the page grid placements as a flat list, optionally filtered by name
   */
  placements: (getPageContent_content_pageByPath_grid_placements | null)[] | null;
}

export interface getPageContent_content_pageByPath {
  __typename: "CMAbstractCategoryImpl" | "CMChannelImpl" | "CMExternalChannelImpl" | "CMExternalPageImpl";
  id: string;
  title: string | null;
  grid: getPageContent_content_pageByPath_grid | null;
}

export interface getPageContent_content {
  __typename: "ContentRoot";
  /**
   * The `pageByPath` query with return type `CMChannel` provides access to any page content by its navigation path.
   */
  pageByPath: getPageContent_content_pageByPath | null;
}

export interface getPageContent {
  /**
   * The content root.
   */
  content: getPageContent_content | null;
}

export interface getPageContentVariables {
  pagePath: string;
  placements: string[];
}
