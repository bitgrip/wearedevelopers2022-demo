import values from "lodash/values";
import toString from "lodash/toString";
import { ApiClientResponse } from "../../ApiClientResponse";
import { JobOffer } from "../../../types/apiTypes/JobOffer";

export interface SearchJobOffersQuery {
  country: string;
  position: string;
}

export interface SearchJobOffersResponse extends ApiClientResponse {
  data: JobOffer[] | null;
}

export const searchJobOffers = async (
  query: SearchJobOffersQuery
): Promise<SearchJobOffersResponse> => {
  try {
    console.debug(
      `Execute StoryBlock.searchJobOffers(${toString(values(query))})`
    );

    // Mock data
    const mockGermanySearchJobOffers: JobOffer[] = [
      {
        id: "joboffer/123",
        type: "Great Job in Berlin",
        country: "Germany",
        position: "Manager",
        data: { content: "Lorem Ipsum" },
      },
    ];

    return {
      status: 200,
      data: mockGermanySearchJobOffers,
    };
  } catch (error) {
    console.error((error as Error).message);
    return { status: 500, data: null };
  }
};
