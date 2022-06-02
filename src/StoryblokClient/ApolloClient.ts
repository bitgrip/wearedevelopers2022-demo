import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { fetch } from "cross-fetch";

export const link = new HttpLink({
  uri: process.env.STORYBLOK_GRAPHQL_ENDPOINT,
  fetch: (...args) => fetch(...args),
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      token: process.env.STORYBLOK_GRAPHQL_TOKEN,
      version: "draft",
    },
  }));

  return forward(operation);
});

export const cmsClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, link),
});
