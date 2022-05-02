import type { NextApiRequest, NextApiResponse } from "next";
import { getPagePrimaryContent } from "../../src/CoreMediaClient/Queries/getPagePrimaryContent/getPagePrimaryContent";

export type GeonamesPostalCodeSearchData = {
  postalCode: string;
};

/**
 * @swagger
 * /api/placement:
 *   get:
 *     summary: Receives a placement by path and name.
 *     description:
 *     tags:
 *       - Content
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: path
 *         description: Page path.
 *         in: query
 *         required: true
 *         type: string
 *       - name: placement
 *         description: Placement name.
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Placement for a specific page.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PlacementResponse>
) {
  const { path, placement } = req.query;

  if (!path || !placement)
    return res
      .status(400)
      .end("Missing identifier. Please provide a path and a placement name.");

  const data: PlacementResponse | null = await getPagePrimaryContent({
    site: "de-de",
    path: <string>path,
    placement: <PlacementName>placement,
  });

  if (!data) return res.status(204).end("Could not find a matching placement.");

  return res.status(200).json(data);
}
