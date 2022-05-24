import { FC } from "react";
import { Interweave } from "interweave";
import { IContent } from "../../types/elements/Content";
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
          <h2>
            <Interweave content={element.headline} />
          </h2>
        )}
        {element?.content && (
          <Richtext content={element.content} />
        )}
      </div>
    </div>
  );
};
