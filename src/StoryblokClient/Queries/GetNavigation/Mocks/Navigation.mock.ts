import {
  getMainMenu,
  getMainMenu_PageItems_items,
} from "../__generated__/getMainMenu";

export const mockJobOffersPage: getMainMenu_PageItems_items = {
  __typename: "PageItem",
  uuid: "b9ce7e90-ed21-4547-98f3-70c01c1dfbcb",
  full_slug: "jobs/",
  name: "Job Offers",
  position: -10,
  parent_id: 132642905,
};

export const mockReferencesPage: getMainMenu_PageItems_items = {
  __typename: "PageItem",
  uuid: "becee759-8f74-4e90-ad3d-4676aef3b75d",
  full_slug: "references/",
  name: "References",
  position: 0,
  parent_id: 132651862,
};

export const mockMainMenu: getMainMenu = {
  PageItems: {
    __typename: "PageItems",
    items: [mockJobOffersPage, mockReferencesPage],
  },
};
