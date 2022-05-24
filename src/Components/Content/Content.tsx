import { FC } from "react";
import { IContent } from "../../types/elements/Content";
import { Headline } from "../Headline/Headline";
import { Richtext } from "../Richtext/Richtext";

export interface ContentProps {
  element: IContent;
}

export const Content: FC<ContentProps> = ({ element }) => {

  return (
    <div className="content-heading content-heading--paragraph grid">
      <div
        id="w-node-_766be7f5-5e3f-4ae9-8f9a-672f3787be5e-3787be5d"
        className="content-heading__content"
      >
        {element?.headline && (
          <Headline content={element.headline} />
        )}
        {element?.content && (
          <Richtext content={element.content} />
        )}
      </div>
    </div>
  );
};
