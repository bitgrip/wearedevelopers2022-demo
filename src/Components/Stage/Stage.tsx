import { FC } from "react";

import { IStage } from "../../types/elements/Stage";

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
        <h1
          id="w-node-_7f1ce50c-3a48-99d0-12e9-d20d8556e105-8556e103"
          className="stage__heading"
        >
          {element?.headline || "Headline"}
        </h1>
        <p
          id="w-node-_7f1ce50c-3a48-99d0-12e9-d20d8556e107-8556e103"
          className="stage__text spacing--top-60"
        >
          {element?.content || "No content"}
        </p>
      </div>
      <figure
        id="w-node-_7f1ce50c-3a48-99d0-12e9-d20d8556e109-8556e103"
        className="stage__image"
      >
        <img
          src="https://uploads-ssl.webflow.com/61c07e84c073699429d75cbe/623b239953381930dfef01e1_jobs.gif"
          loading="lazy"
          alt=""
          className="stage__image-media"
        />
      </figure>
    </div>
  );
};
