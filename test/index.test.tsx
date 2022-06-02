import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { getPage } from "next-page-tester";
import { setupServer } from "msw/node";
import { graphql } from "msw";
import { getJobListQueryResponseDataMock } from "../src/StoryblokClient/Queries/GetJobList/Mocks/getJobListQuery.mock";
import { getPageContentQueryResponseDataMock } from "../src/StoryblokClient/Queries/GetPageContent/Mocks/getPageContentQuery.mock";
import userEvent from "@testing-library/user-event";

/**
 * @group integration
 */
describe("Home", () => {
  // Setup the server
  // graphql.link() is primarily designed for applications that communicate with multiple GraphQL endpoints
  // to prevent operation name collision during API mocking.
  const storyblok = graphql.link(process.env.STORYBLOK_GRAPHQL_ENDPOINT || "");

  // List of all the requests to mock
  const handlers = [
    // Mock the request to get the job list
    storyblok.query("getJobList", (req, res, ctx) => {
      return res(ctx.data(getJobListQueryResponseDataMock.data));
    }),
    // Mock the request to get the page content
    storyblok.query("getPageContent", (req, res, ctx) => {
      return res(ctx.data(getPageContentQueryResponseDataMock.data));
    }),
  ];

  // MSW will intercept all requests to the Storyblok GraphQL endpoint and return the mocked response
  const server = setupServer(...handlers);

  // Start the mocked server
  beforeAll(() => server.listen({ onUnhandledRequest: "warn" }));

  // reset the mocked server after each  test
  beforeEach(() => {
    server.resetHandlers();
  });

  // Stop the mocked server after all tests
  afterAll(() => {
    server.close();
  });

  /**
   * Test the page content
   * @group integration
   */
  it("should display a page headline", async () => {
    // Render the page like nextjs whould do via via next-page-tester
    const { render } = await getPage({ route: "/" });
    render();

    // Check if the page headline is displayed
    expect(
      screen.getByRole("heading", { level: 1 }) // Workaround for duplicated elements
    ).toHaveTextContent("Jobs bei Bitgrip: Jetzt wechseln zum #bestteamintown");
  });

  /**
   * Tests the Jobs list after inital render
   * * Renders the page
   * * Checks if the all jobs are rendered
   * @group integration
   */
  it("should display all jobs", async () => {
    // Render the page like nextjs would do via next-page-tester
    const { render } = await getPage({ route: "/" });
    render();

    // Check if all jobs are displayed
    expect(
      screen.getByText(/Operations Engineer/) // Workaround for duplicated elements
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Senior Frontend Engineer/) // Workaround for duplicated elements
    ).toBeInTheDocument();
  });

  /**
   * Tests the Job list after filtering
   * * Renders the page
   * * Filters the jobs by the "frontend" tag
   * * Checks if the filtered jobs are displayed
   * @group integration
   */
  it("should display filter frontend jobs", async () => {
    // Render the page like nextjs would do via next-page-tester
    const { render } = await getPage({ route: "/" });
    render();

    // Click on the filter button "Frontend"
    userEvent.click(screen.getByRole("button", { name: "Frontend" }));

    // Check if only the frontend jobs are displayed
    expect(
      screen.getByText(/Senior Frontend Engineer/) // Workaround for duplicated elements
    ).toBeInTheDocument();

    // Debugging tools
    // screen.debug(undefined, 100000);

    // Check if the other jobs are not displayed
    // expect(
    //   await screen.findByText(/Operations Engineer/)
    // ).not.toBeInTheDocument();
  });
});
