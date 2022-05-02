import { getMainMenu_content } from "../__generated__/getMainMenu";

export const MockMainMenuAsSite: getMainMenu_content = {
  __typename: "ContentRoot",
  site: {
    __typename: "Site",
    root: {
      __typename: "CMChannelImpl",
      navigationPath: [
        {
          __typename: "CMChannelImpl",
          title: "Bitgrip Career Home",
          segment: "home",
          link: {
            __typename: "Link",
            id: "10001",
          },
        },
      ],
      children: [
        {
          __typename: "CMChannelImpl",
          title: "Bitgrip as Employer",
          segment: "bitgrip-as-employer",
          link: {
            __typename: "Link",
            id: "10110",
          },
        },
        {
          __typename: "CMChannelImpl",
          title: "Jobs",
          segment: "",
          link: {
            __typename: "Link",
            id: "10120",
          },
        },
        {
          __typename: "CMChannelImpl",
          title: "Pupils",
          segment: "pupils",
          link: {
            __typename: "Link",
            id: "10130",
          },
        },
        {
          __typename: "CMChannelImpl",
          title: "Students",
          segment: "students",
          link: {
            __typename: "Link",
            id: "10140",
          },
        },
      ],
    },
  },
};
