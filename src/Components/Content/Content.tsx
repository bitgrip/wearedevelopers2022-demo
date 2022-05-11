import { FC } from "react";
import { IContent } from "../../types/elements/Content";

export interface ContentProps {
  element: IContent;
}

export const Content: FC<ContentProps> = ({ element }) => {

  return (
    <div className="content-heading content-heading--paragraph grid">
      <div id="w-node-_766be7f5-5e3f-4ae9-8f9a-672f3787be5e-3787be5d" className="content-heading__content">
        <h2>{ element?.headline }</h2>
        <p className="stage__text spacing--top-60">{ element?.content }</p>
      </div>
    </div>
  );
};
