import { GetStaticProps } from "next";

import { createSwaggerSpec } from "next-swagger-doc";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export interface ISpecProps {
  spec: object;
}

export default function ApiDoc(props: ISpecProps) {
  return <SwaggerUI spec={props.spec}></SwaggerUI>;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const spec: Record<string, any> = createSwaggerSpec({
    title: "Swagger for client API",
    version: "0.1.0",
  });
  return {
    props: {
      spec,
    },
  };
};
