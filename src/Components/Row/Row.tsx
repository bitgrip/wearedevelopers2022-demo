import { FC } from "react";

export interface RowProps {
  children: any;
}
export const Row: FC<RowProps> = ({ children }) => {

  return (
    <div className="container__row spacing--stage">
      {children}
    </div>
  );
};
