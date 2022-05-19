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
  const slug = "jobs/";
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
  };
};

export default function PageLayout(props: SSRPageLayoutProps) {
  const { slug, pageContent } = props;
  console.log(pageContent);

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
        <Footer />
      </body>
    </>
  );
}
