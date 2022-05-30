import { FC } from "react";
import { Interweave } from "interweave";
import { IStage } from "../../types/elements/Stage";
import { Richtext } from "../Richtext/Richtext";
import { Headline } from "../Headline/Headline";

export interface StageProps {
  element: IStage;
}
export const Stage: FC<StageProps> = ({ element }) => {
  return (
    <div className="stage stage--page-intro grid">
      <div
        id="w-node-_7f1ce50c-3a48-99d0-12e9-d20d8556e104-8556e103"
        className="stage__content"
      >
        {element?.headline && (
          <Headline content={element.headline} level='h1' />
        )}

        {element?.content && (
          <Richtext content={element.content} />
        )}
      </div>
      <figure
        id="w-node-_7f1ce50c-3a48-99d0-12e9-d20d8556e109-8556e103"
        className="stage__image"
      >
        <img
          src="https://uploads-ssl.webflow.com/61c07e84c073699429d75cbe/623b239953381930dfef01e1_jobs.gif"
          loading="lazy"
          alt=""
          className="stage__image-media chromatic-ignore"
        />
      </figure>
    </div>
  );
};
