import { mapTags } from "./mapTags";

/**
 * @group unit/cms/types
 */
describe("should filter and map job offer tags", () => {
  test("transform tag array to single tag as string", () => {
    expect(mapTags(["frontend", "developer"])).toBe("frontend");
    expect(mapTags(["frontend"])).toBe("frontend");
    expect(mapTags(["frontend"])).toBe("frontend");
  });

  test("return null if no tags are left", () => {
    expect(mapTags([])).toBeNull();
  });
});
