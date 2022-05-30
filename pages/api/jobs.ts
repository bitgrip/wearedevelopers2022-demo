import type { NextApiRequest, NextApiResponse } from "next";
import {
  getJobList,
  JobListResponse,
} from "../../src/StoryblokClient/Queries/GetJobList/getJobList";
import { IListElement } from "../../src/types/elements/List";

interface IApiJobsResponse {
  filter: string;
  results: number;
  jobs: IListElement[];
}

/**
 * @swagger
 * /api/jobs:
 *   get:
 *     summary: Searches for job offers by tag.
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
  res: NextApiResponse<IApiJobsResponse>
) {
  const { tag } = req.query;

  // fetch jobs
  const pureData: JobListResponse = await getJobList();
  if (!pureData.data || pureData.data.length === 0) {
    return res.status(204).end("Could not find any job offer");
  }

  const jobList: IListElement[] = pureData.data;

  const filteredData = (
    tag && tag !== "all"
      ? jobList.filter((job: IListElement) => job.key === tag)
      : jobList
  ).map((job: IListElement) => {
    return { ...job, apiPath: `/api/jobs/${job.jobid}` };
  });

  const data: IApiJobsResponse = {
    filter: (tag as string) || "all",
    results: filteredData.length,
    jobs: filteredData,
  };

  if (!data)
    return res.status(204).end("Could not find any matching job offer");

  return res.status(200).json(data);
}
