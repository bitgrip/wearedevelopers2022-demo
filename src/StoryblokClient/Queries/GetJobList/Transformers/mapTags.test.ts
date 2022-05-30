import { mapTags } from "./mapTags";

/**
 * @group unit/cms/types
 */
describe("should filter and map job offer tags", () => {
  test("transform tag array to single tag as string", () => {
    expect(mapTags(["frontend", "developer", "joboffer"])).toBe("frontend");
    expect(mapTags(["frontend", "joboffer"])).toBe("frontend");
    expect(mapTags(["frontend"])).toBe("frontend");
  });

  test("return null if no tags are left", () => {
    expect(mapTags(["joboffer"])).toBeNull();
    expect(mapTags([])).toBeNull();
  });
});
