import React, { Suspense } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { join } from "lodash";
import { IFooter } from "../src/Types/elements/Footer";
import { Footer } from "../src/Components/Footer/Footer";
// import dynamic from "next/dynamic";
import { Header } from "../src/Components/Header/Header";
import { JobSearch } from "../src/Components/JobSearch/JobSearch";
import { Navigation } from "../src/Types/Navigation/Navigation";
import { Page } from "../src/Types/layout/Page";
import {
  getNavigation,
  NavigationResponse,
} from "../src/CoreMediaClient/Queries/GetNavigation/getNavigation";
import {
  FooterResponse,
  getFooter,
} from "../src/CoreMediaClient/Queries/GetFooter/getFooter";
import {
  getPagePrimaryContent,
  PrimaryContentResponse,
} from "../src/CoreMediaClient/Queries/GetPagePrimaryContent/getPagePrimaryContent";
import RelatedSection from "../src/Components/RelatedSection/RelatedSection";

export interface SSRPageLayoutProps {
  slug: string;
  navigation: Navigation | null;
  footer: IFooter | null;
  pageContent: Page | null;
}

export const getStaticProps: GetStaticProps<SSRPageLayoutProps> = async ({
  params,
}) => {
  const slug = join(params!.slug, "/");
  console.debug("getStaticProps for " + slug);

  let navigation: NavigationResponse | undefined = undefined;
  let footer: FooterResponse | undefined = undefined;
  let pageContent: PrimaryContentResponse | undefined = undefined;

  try {
    [navigation, footer, pageContent] = await Promise.all([
      getNavigation({ site: "de-de" }),
      getFooter({ site: "de-de" }),
      getPagePrimaryContent({ pagePath: slug }),
    ]);
  } catch (error) {
    console.error("Could not fetch data.");
  }

  return {
    props: {
      slug: slug,
      navigation: navigation?.data || null,
      footer: footer?.data || null,
      pageContent: pageContent?.data || null,
    },
    revalidate: 3600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

// const RelatedSection = dynamic(
//   () => import("../src/Components/RelatedSection/RelatedSection"),
//   { suspense: true }
// );

export default function PageLayout(props: SSRPageLayoutProps) {
  const { slug, navigation, footer, pageContent } = props;

  if (!navigation || !footer || !pageContent) {
    return (
      <div className="absolute top-0 grid grid-cols-1 h-full min-h-full w-full min-w-full place-content-center content-center text-center bg-gray-50">
        <div className="h-36 w-36 m-auto rounded-full bg-gray-200 animate-pulse">
          <span className="invisible">loading ...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Head>
        <title>TEST</title>
        <meta name="description" content={`Hallo`} />
        <link rel="canonical" href={`/fghjk/`} />
      </Head>
      <Header />
      <div className="min-h-[calc(100vh_-_15rem)] py-8">
        <main
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
          key="pageSection"
        >
          {pageContent.stage && (
            <div className="border border-gray-300 p-4">
              STAGE
              {pageContent.stage.map((placement) => {
                return (
                  <div key={placement.name}>
                    <h2 className="text-xl mb-l">
                      Placement: {placement.name}
                    </h2>
                    <pre className="mb-8 text-xs">
                      {JSON.stringify(placement.items, null, 2)}
                    </pre>
                  </div>
                );
              })}
            </div>
          )}
          {pageContent.content && (
            <div className="border border-gray-300 p-4">
              CONTENT
              {pageContent.content.map((placement) => {
                return (
                  <div key={placement.name}>
                    <h2 className="text-xl mb-l">
                      Placement: {placement.name}
                    </h2>
                    <pre className="mb-8 text-xs">
                      {JSON.stringify(placement.items, null, 2)}
                    </pre>
                  </div>
                );
              })}
            </div>
          )}
        </main>
        {slug === "karriere" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <JobSearch />
          </div>
        )}
        <Suspense fallback={<div>Loading...</div>}>
          <aside className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <RelatedSection path={slug} />
          </aside>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
