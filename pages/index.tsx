import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Header } from "../src/Components/Header/Header";
import { Footer } from "../src/Components/Footer/Footer";
import { Container } from "../src/Components/Container/Container";
import { Row } from "../src/Components/Row/Row";
import { Page } from "../src/types/layout/Page";
import { JobSearch } from "../src/Components/JobSearch/JobSearch";
import { filterList } from "../src/Components/JobSearch/JobSearch.mock";
import {
  getPageContent,
  PageContentResponse,
} from "../src/StoryblokClient/Queries/GetPageContent/getPageContent";
import { ContentElementComponentMapper } from "../src/Components/ContentElementComponentMapper";
import {
  getJobList,
  JobListResponse,
} from "../src/StoryblokClient/Queries/GetJobList/getJobList";
import { IListElement } from "../src/types/elements/List";
import { IContentElement } from "../src/types/layout/ContentElement";

export interface SSRPageLayoutProps {
  slug: string;
  pageContent: Page | null;
  jobList: IListElement[] | null;
}

export const getStaticProps: GetStaticProps<SSRPageLayoutProps> = async ({
  params,
}) => {
  const slug = "jobs";
  let pageContent: PageContentResponse | undefined = undefined;
  let jobList: JobListResponse | undefined = undefined;

  try {
    [pageContent, jobList] = await Promise.all([
      getPageContent({ slug }),
      getJobList(),
    ]);
  } catch (error) {
    console.error("Could not fetch data.");
  }

  return {
    props: {
      slug: slug,
      pageContent: pageContent?.data || null,
      jobList: jobList?.data || null,
    },
  };
};

export default function PageLayout(props: SSRPageLayoutProps) {
  const { slug, pageContent, jobList } = props;

  return (
    <>
      <Head>
        <title>Join the #bestteamintown</title>
        <meta name="description" content={`Hallo`} />
        <link rel="canonical" href={`/${slug}/`} />
      </Head>
      <body id="page" className="body--general">
        <Header />
        <div className="content-wrapper">
          {pageContent?.content &&
            pageContent.content.map((contentElement: IContentElement) => (
              <Container key={contentElement.id}>
                <Row>
                  <ContentElementComponentMapper
                    {...contentElement}
                  ></ContentElementComponentMapper>
                </Row>
              </Container>
            ))}
        </div>
        <Container>
          <Row>
            {jobList && (
              <JobSearch
                id="jobsearch"
                type="jobsearch"
                list={jobList}
                filterList={filterList}
              />
            )}
          </Row>
        </Container>
        <Footer />
      </body>
    </>
  );
}
