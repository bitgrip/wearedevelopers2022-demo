import React, { Suspense } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { join } from "lodash";
import { Header } from "../src/Components/Header/Header";
import { Footer } from "../src/Components/Footer/Footer";
import { Container } from "../src/Components/Container/Container";
import { Row } from "../src/Components/Row/Row";
import { Page } from "../src/types/layout/Page";
import { JobSearch } from "../src/Components/JobSearch/JobSearch";
import {
  filterList,
  jobList,
} from "../src/Components/JobSearch/JobSearch.mock";
import {
  getPageContent,
  PageContentResponse,
} from "../src/StoryblokClient/Queries/GetPageContent/getPageContent";
import { ContentElementComponentMapper } from "../src/Components/ContentElementComponentMapper";
import { IContentElement } from "../src/types/layout/ContentElement";
import { StageMock } from "../src/Components/Stage/Stage.mock";
import { ContentMock } from "../src/Components/Content/Content.mock";

export interface SSRPageLayoutProps {
  slug: string;
  pageContent: Page | null;
}

export const getStaticProps: GetStaticProps<SSRPageLayoutProps> = async ({
  params,
}) => {
  const slug = join(params!.slug, "/");
  console.debug("getStaticProps for " + slug);

  let pageContent: PageContentResponse | undefined = undefined;

  try {
    [pageContent] = await Promise.all([getPageContent({ slug })]);
  } catch (error) {
    console.error("Could not fetch data.");
  }

  return {
    props: {
      slug: slug,
      pageContent: pageContent?.data || null,
    },
    revalidate: 3600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export default function PageLayout(props: SSRPageLayoutProps) {
  const { slug, pageContent } = props;

  /*
  if (!navigation) {
    return (
      <div className="absolute top-0 grid grid-cols-1 h-full min-h-full w-full min-w-full place-content-center content-center text-center bg-gray-50">
        <div className="h-36 w-36 m-auto rounded-full bg-gray-200 animate-pulse">
          <span className="invisible">loading ...</span>
        </div>
      </div>
    );
  }
  */

  // console.log(pageContent);

  return (
    <div className="bg-white">
      <Head>
        <title>Join the #bestteamintown</title>
        <meta name="description" content={`Hallo`} />
        <link rel="canonical" href={`/${slug}/`} />
      </Head>
      <body id="page" className="body--general">
        <Header />
        <div className="content-wrapper">
          <Container>
            <Row>
              <ContentElementComponentMapper {...StageMock} />
            </Row>
          </Container>
          <Container>
            <Row>
              <ContentElementComponentMapper {...ContentMock} />
            </Row>
          </Container>
          <Container>
            <Row>
              {slug === "jobs" && (
                <JobSearch
                  id="jobsearch"
                  type="jobsearch"
                  list={jobList}
                  filterList={filterList}
                />
              )}
            </Row>
          </Container>
        </div>
        <Footer />
      </body>
    </div>
  );
}
