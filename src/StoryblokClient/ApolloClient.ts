import { ApolloClient, InMemoryCache } from "@apollo/client";

export const cmsClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.STORYBLOK_GRAPHQL_ENDPOINT,
  headers: {
    Version: "draft",
    Token: process.env.STORYBLOK_GRAPHQL_TOKEN as string,
  },
});
