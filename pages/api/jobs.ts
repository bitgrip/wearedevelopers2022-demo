import type { NextApiRequest, NextApiResponse } from "next";

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
  res: NextApiResponse/* TODO <ReponseType>*/
) {
  const { country, position } = req.query;

  const data = null;

  if (!data)
    return res.status(204).end("Could not find any matching job offer");

  return res.status(200).json(data);
}
