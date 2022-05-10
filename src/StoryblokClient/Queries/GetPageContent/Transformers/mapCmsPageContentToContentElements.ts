import { IContentElement } from "../../../../types/layout/ContentElement";

import { getPageContent_PageItem_content } from "../__generated__/getPageContent";

export const mapCmsPageContentToContentElements = (
  pageContent: getPageContent_PageItem_content
): IContentElement[] => {
  const contentElements: IContentElement[] = pageContent.body.map(
    (element: any) => {
      const contentElement: IContentElement = {
        ...element,
        id: element._uid as string,
        type: element.component,
      };

      return contentElement;
    }
  );
  return contentElements;
};
