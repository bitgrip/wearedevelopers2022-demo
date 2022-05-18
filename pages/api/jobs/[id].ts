import type { NextApiRequest, NextApiResponse } from "next";
import { jobList } from "../../../src/Components/JobSearch/JobSearch.mock";
import { IListElement } from "../../../src/types/elements/List";

interface IApiJobResponse {
  job: IListElement | null;
}

/**
 * @swagger
 * /api/jobs/{id}:
 *   get:
 *     summary: Get a single job offer by id.
 *     description:
 *     tags:
 *       - Jobs
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: tag
 *         description: Tag
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Job offers.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IApiJobResponse>
) {
  const { id } = req.query;

  const pureData: IListElement[] = jobList;

  const filteredData = id ? pureData.filter((job: any) => job.id === id) : [];

  const data: IApiJobResponse = {
    job:
      filteredData.length > 0
        ? {
            ...filteredData?.[0],
            apiPath: `/api/jobs/${filteredData?.[0].jobid}`,
          }
        : null,
  };

  if (!data)
    return res.status(204).end("Could not find any matching job offer");

  return res.status(200).json(data);
}
