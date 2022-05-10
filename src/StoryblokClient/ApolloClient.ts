import { ApolloClient, InMemoryCache } from "@apollo/client";

export const cmsClient = new ApolloClient({
  /**
   * TODO: configure in memory cache
   * https://documentation.coremedia.com/cmcc-10/artifacts/2107/manuals/headlessserver-en.pdf #14.2.2
   * https://www.apollographql.com/docs/react/data/fragments/#generating-possibletypes-automatically
   */
  cache: new InMemoryCache(),
  uri: process.env.STORYBLOK_GRAPHQL_ENDPOINT,
  headers: {
    Version: "draft",
    Token: process.env.STORYBLOK_GRAPHQL_TOKEN as string,
  },
});
