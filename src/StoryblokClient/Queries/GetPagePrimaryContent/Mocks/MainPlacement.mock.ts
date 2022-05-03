import {
  getPageContent_content_pageByPath_grid,
  getPageContent_content_pageByPath_grid_placements,
  getPageContent_content_pageByPath_grid_placements_items,
} from "../__generated__/getPageContent";

export const MockPlacementItemStub: getPageContent_content_pageByPath_grid_placements_items =
  {
    __typename: "CMLinkableImpl",
    id: "12345",
    type: "CMArticle",
    name: "Lorem Ipsum",
    title: "At vero eos et accusam et justo duo dolores et ea rebum.",
  };

export const MockPlacementStub: getPageContent_content_pageByPath_grid_placements =
  {
    __typename: "PageGridPlacement",
    name: "SomePlacementName",
    items: [
      MockPlacementItemStub,
      MockPlacementItemStub,
      MockPlacementItemStub,
      MockPlacementItemStub,
    ],
  };

export const MockPlacementHero: getPageContent_content_pageByPath_grid_placements =
  {
    __typename: "PageGridPlacement",
    name: "hero",
    items: [MockPlacementItemStub],
  };

export const MockPlacementMain: getPageContent_content_pageByPath_grid_placements =
  {
    __typename: "PageGridPlacement",
    name: "main",
    items: [MockPlacementItemStub],
  };

export const MockGridStub: getPageContent_content_pageByPath_grid = {
  __typename: "PageGrid",
  placements: [
    MockPlacementStub,
    MockPlacementHero,
    MockPlacementStub,
    MockPlacementStub,
    MockPlacementMain,
  ],
};

// // Mock data
// export const MockHomeMainPlacement: Placement = {
//   placement: "main",
//   items: [
//     {
//       id: "home/main/123",
//       type: "Headline",
//       content: "Unser Markenversprechen",
//     },
//     {
//       id: "home/main/456",
//       type: "Text",
//       content:
//         "",
//     },
//     {
//       id: "home/main/789",
//       type: "Image",
//       content: {
//         src: "",
//         alt: "Markenversprechen",
//       },
//     },
//   ],
// };

// export const MockKarriereMainPlacement: Placement = {
//   placement: "main",
//   items: [
//     {
//       id: "karriere/main/123",
//       type: "Headline",
//       content: "Finde einen Job",
//     },
//     {
//       id: "karriere/main/456",
//       type: "Text",
//       content:
//         "",
//     },
//     {
//       id: "karriere/main/789",
//       type: "Image",
//       content: {
//         src: "",
//         alt: "Markenversprechen",
//       },
//     },
//   ],
// };
