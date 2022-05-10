import React, { Suspense } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { join } from "lodash";
import { Header } from "../src/Components/Header/Header";
import { Navigation } from "../src/types/Navigation/Navigation";
import { Page } from "../src/types/layout/Page";
import RelatedSection from "../src/Components/RelatedSection/RelatedSection";
import {
  getNavigation,
  NavigationResponse,
} from "../src/StoryblokClient/Queries/GetNavigation/getNavigation";
import { JobSearch } from "../src/Components/JobSearch/JobSearch";
import {
  filterList,
  jobList,
} from "../src/Components/JobSearch/JobSearch.mock";

export interface SSRPageLayoutProps {
  slug: string;
  navigation: Navigation | null;
}

export const getStaticProps: GetStaticProps<SSRPageLayoutProps> = async ({
  params,
}) => {
  const slug = join(params!.slug, "/");
  console.debug("getStaticProps for " + slug);

  let navigation: NavigationResponse | undefined = undefined;

  try {
    [navigation] = await Promise.all([getNavigation()]);
  } catch (error) {
    console.error("Could not fetch data.");
  }

  return {
    props: {
      slug: slug,
      navigation: navigation?.data || null,
      // footer: footer?.data || null,
      // pageContent: pageContent?.data || null,
    },
    revalidate: 3600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export default function PageLayout(props: SSRPageLayoutProps) {
  const { slug, navigation } = props;

  if (!navigation) {
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
        ></main>
        {/* <pre>{JSON.stringify(navigation, null, 2)}</pre> */}
        {slug === "jobs" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <JobSearch list={jobList} filterList={filterList} />
          </div>
        )}
        <Suspense fallback={<div>Loading...</div>}>
          <aside className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <RelatedSection path={slug} />
          </aside>
        </Suspense>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
