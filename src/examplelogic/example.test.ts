import {foo} from "./example";

/**
 * @group logic
 */
describe("example tests", () => {
    test("foo should return 'bar'", () => {
        expect(foo()).toBe("bar");
    });
});
