import type { NextApiRequest, NextApiResponse } from "next";
import {
  searchJobOffers,
  SearchJobOffersResponse,
} from "../../src/StoryblokClient/Queries/SearchJobOffers/searchJobOffers";

/**
 * @swagger
 * /api/jobs:
 *   get:
 *     summary: Searches for job offers by country or position.
 *     description:
 *     tags:
 *       - Search
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: country
 *         description: Country.
 *         in: query
 *         required: true
 *         type: string
 *       - name: position
 *         description: Position.
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Job offers.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchJobOffersResponse>
) {
  const { country, position } = req.query;

  const data: SearchJobOffersResponse | null = await searchJobOffers({
    country: <string>country,
    position: <string>position,
  });

  if (!data)
    return res.status(204).end("Could not find any matching jo.b offer");

  return res.status(200).json(data);
}
