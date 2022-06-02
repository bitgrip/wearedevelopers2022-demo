import { getJobList_JobItems_items } from "../__generated__/getJobList";

export const mockJobOffer: getJobList_JobItems_items = {
  __typename: "JobItem",
  uuid: "id123",
  name: "Senior Frontend Developer",
  content: {
    __typename: "JobComponent",
    external_link: {
      __typename: "Link",
      url: "https://bitgrip.com/jobs",
    },
    tag: ["frontend"],
  },
};
