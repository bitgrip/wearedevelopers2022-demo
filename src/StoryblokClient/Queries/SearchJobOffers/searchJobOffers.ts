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
      `Execute CoreMedia.searchJobOffers(${toString(values(query))})`
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

    const mockGFranceSearchJobOffers: JobOffer[] = [
      {
        id: "joboffer/653",
        type: "Great Job in Paris",
        country: "France",
        position: "Assistent Manager",
        data: { content: "Lorem Ipsum" },
      },
    ];
    const mockSearchJobOffers: any = {
      germany: mockGermanySearchJobOffers,
      france: mockGFranceSearchJobOffers,
    };

    return {
      status: 200,
      data: mockSearchJobOffers?.[query.country],
    };
  } catch (error) {
    console.error((error as Error).message);
    return { status: 500, data: null };
  }
};
