import {
  getMainMenu_content_site_root_children,
  getMainMenu_content_site_root_navigationPath,
} from "../__generated__/getMainMenu";

export const MockCMLinkableSiteRoot: getMainMenu_content_site_root_navigationPath =
  {
    __typename: "CMChannelImpl",
    title: "Home",
    segment: "home",
    link: {
      __typename: "Link",
      id: "10100",
    },
  };

export const MockCMLinkableSiteRootMissingSegment: getMainMenu_content_site_root_navigationPath =
  {
    __typename: "CMChannelImpl",
    title: "Home Without Segment",
    segment: "",
    link: {
      __typename: "Link",
      id: "10100",
    },
  };
export const MockCMLinkableSiteChildren: getMainMenu_content_site_root_children[] =
  [
    {
      __typename: "CMLinkableImpl",
      title: "Pupils",
      segment: "pupils",
      link: {
        id: "10200",
        __typename: "Link",
      },
    },
    {
      __typename: "CMLinkableImpl",
      title: "Students Without Segment",
      segment: "",
      link: {
        id: "10300",
        __typename: "Link",
      },
    },
  ];
