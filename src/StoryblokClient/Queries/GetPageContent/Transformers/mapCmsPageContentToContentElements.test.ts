import { IContentElement } from "../../../../types/layout/ContentElement";
import { pageContent } from "../Mocks/contentElements.mock";
import { mapCmsPageContentToContentElements } from "./mapCmsPageContentToContentElements";

/**
 * @group cms/types
 */
describe("should transform a cms page content body into a list of app content element types", () => {
  test("transform page content body", () => {
    const contentElements: IContentElement[] =
      mapCmsPageContentToContentElements(pageContent);

    const contentElementOne = contentElements[0];
    const contentElementTwo = contentElements[1];

    expect(contentElements).toHaveLength(2);
    expect(contentElementOne).toHaveProperty(
      "id",
      "09b4cfbd-0883-4f37-877e-209c649ad99d"
    );
    expect(contentElementOne).toHaveProperty("type", "Stage");
    expect(contentElementTwo).toHaveProperty(
      "id",
      "2ececbb7-a87c-41f6-8355-0a332f4b610d"
    );
    expect(contentElementTwo).toHaveProperty("type", "Contentblock");
  });

  test("transform a cms stage content element", () => {
    const contentElements: IContentElement[] =
      mapCmsPageContentToContentElements(pageContent);
    const stageContentElement = contentElements[0];
    expect(stageContentElement).toHaveProperty("headline", "Stage Headline");
    expect(stageContentElement).toHaveProperty(
      "content",
      "Lorem Ipsum Stage Content"
    );
  });

  test("transform a cms content block content element", () => {
    const contentElements: IContentElement[] =
      mapCmsPageContentToContentElements(pageContent);
    const contentBlockContentElement = contentElements[1];
    expect(contentBlockContentElement).toHaveProperty(
      "Headline",
      "Content Block Headline"
    );
    expect(contentBlockContentElement).toHaveProperty(
      "Content",
      "Lorem Ipsum Content Block Content"
    );
  });
});
