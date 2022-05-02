import { Navigation } from "../../../../Types/Navigation/Navigation";
import { MockMainMenuAsSite } from "../Mocks/Navigation.mock";

import { mapCoreMediaMainMenuToNavigation } from "./mapCoreMediaMainMenuToNavigation";

/**
 * @group coremedia/types
 */
describe("should transform a core media main menu into a app navigation type", () => {
  test("returns transformed main menu", () => {
    expect(mapCoreMediaMainMenuToNavigation(MockMainMenuAsSite)).toMatchObject({
      id: "10001",
      name: "Bitgrip Career Home",
      slug: "home",
      children: [
        {
          id: "10110",
          name: "Bitgrip as Employer",
          slug: "bitgrip-as-employer",
        },
        {
          id: "10120",
          name: "Jobs",
          slug: "jobs",
        },
        {
          id: "10130",
          name: "Pupils",
          slug: "pupils",
        },
        {
          id: "10140",
          name: "Students",
          slug: "students",
        },
      ],
    } as Navigation);
  });
});
