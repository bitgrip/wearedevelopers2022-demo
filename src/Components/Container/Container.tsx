import { FC } from "react";

export interface ContainerProps {
  children: any;
}
export const Container: FC<ContainerProps> = ({ children }) => {

  return (
    <div className="container">
      {children}
    </div>
  );
};
