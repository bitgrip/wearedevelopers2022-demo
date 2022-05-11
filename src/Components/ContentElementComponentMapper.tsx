import { IContentElement } from "../types/layout/ContentElement";
import { Stage } from "./Stage/Stage";
import { Content } from './Content/Content';

const ContentElementComponentMap: any = {
  Stage: Stage,
  Contentblock: Content,
  cvb: Stage,
};

export const ContentElementComponentMapper = (
  contentElement: IContentElement
): any => {
  if (!contentElement) {
    console.log(
      "ContentElementComponentMapper could not map element, because of missing data."
    );
    return <p>Error</p>;
  }

  if (!contentElement.type) {
    console.log(
      'ContentElementComponentMapper could not map element, because "type" is not set.'
    );
    return <></>;
  }

  if (typeof ContentElementComponentMap[contentElement.type] !== "undefined") {
    const Element = ContentElementComponentMap[contentElement.type];

    return <Element element={contentElement} />;
  }

  return (
    <div>
      Placeholder <pre>{JSON.stringify(contentElement, null, 2)}</pre>
    </div>
  );
};
