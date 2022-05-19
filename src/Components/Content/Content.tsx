import { FC } from "react";
import { Interweave } from "interweave";
import { IContent } from "../../types/elements/Content";

export interface ContentProps {
  element: IContent;
}

export const Content: FC<ContentProps> = ({ element }) => {
  console.log(element);

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
          <p className="stage__text spacing--top-60">
            <Interweave content={element.content} />
          </p>
        )}
      </div>
    </div>
  );
};
