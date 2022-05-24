import { FC } from "react";
import { Interweave } from "interweave";

export interface RichtextProps {
  content: string;
}

export const Richtext: FC<RichtextProps> = ({ content }) => {

  return (
    <p className="stage__text spacing--top-60">
      <Interweave content={content} />
    </p>
  );
};
