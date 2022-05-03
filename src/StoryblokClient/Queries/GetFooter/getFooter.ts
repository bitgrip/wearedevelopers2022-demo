import values from "lodash/values";
import toString from "lodash/toString";
import { Footer } from "../../../types/elements/Footer";
import { ApiClientResponse } from "../../ApiClientResponse";
import { MockFooter } from "./Mocks/Footer.mock";

export interface FooterQuery {
  site: string;
}

export interface FooterResponse extends ApiClientResponse {
  data: Footer | null;
}

export const getFooter = async (
  query: FooterQuery
): Promise<FooterResponse> => {
  try {
    console.debug(`Execute CoreMedia.getFooter(${toString(values(query))})`);

    const mockFooter: Footer = MockFooter;

    // Mock data
    return {
      status: 200,
      data: mockFooter,
    };
  } catch (error) {
    console.error((error as Error).message);
    return { status: 500, data: null };
  }
};
