import { MockSiteEmeraldEnUs } from "../Mocks/Site.mock";
import { Site } from "../../../../Types/Site/Site";
import { mapCoreMediaSiteToSite } from "./mapCoreMediaSiteToSite";

/**
 * @group coremedia/types
 */
describe("should transform a core media site type into a app site type", () => {
  test("returns transformed geo location", () => {
    expect(mapCoreMediaSiteToSite(MockSiteEmeraldEnUs)).toMatchObject({
      id: "emeraldenus",
      name: "Emerald",
      locale: "en_US",
      slug: "emerald-en-us",
    } as Site);
  });
});
