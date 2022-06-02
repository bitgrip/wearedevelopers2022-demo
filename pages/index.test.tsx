import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { getPage } from "next-page-tester";
import { setupServer } from "msw/node";
import { graphql } from "msw";
import { getJobListQueryResponseDataMock } from "../src/StoryblokClient/Queries/GetJobList/Mocks/getJobListQuery.mock";
import { getPageContentQueryResponseDataMock } from "../src/StoryblokClient/Queries/GetPageContent/Mocks/getPageContentQuery.mock";

describe("Home", () => {
  const storyblok = graphql.link(process.env.STORYBLOK_GRAPHQL_ENDPOINT || "");

  const handlers = [
    storyblok.query("getJobList", (req, res, ctx) => {
      return res(ctx.data(getJobListQueryResponseDataMock.data));
    }),
    storyblok.query("getPageContent", (req, res, ctx) => {
      return res(ctx.data(getPageContentQueryResponseDataMock.data));
    }),
  ];
  const server = setupServer(...handlers);

  beforeAll(() => server.listen({ onUnhandledRequest: "warn" }));

  beforeEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it("should display a page headline", async () => {
    const { render } = await getPage({ route: "/" });
    render();

    expect(
      screen.getAllByRole("heading", { level: 1 })[1] // Workaround for duplicated elements
    ).toHaveTextContent("Jobs bei Bitgrip: Jetzt wechseln zum #bestteamintown");
  });

  it("should display a job", async () => {
    const { render } = await getPage({ route: "/" });
    render();

    expect(
      screen.getAllByText("Senior Frontend Engineer")[1] // Workaround for duplicated elements
    ).toBeInTheDocument();
  });
});
