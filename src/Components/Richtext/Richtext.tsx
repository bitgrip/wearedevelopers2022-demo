import { FC } from "react";
import { Interweave } from "interweave";

export interface RichtextProps {
  content: string;
  className?: string;
}

export const Richtext: FC<RichtextProps> = ({ content, className}) => {

  return (
    <p className={`stage__text spacing--top-60 ${className}`}>
      <Interweave content={content} />
    </p>
  );
};
