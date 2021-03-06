[![Deploy Pipeline](https://github.com/bitgrip/wearedevelopers2022-demo/actions/workflows/deploypipeline.yml/badge.svg?branch=main)](https://github.com/bitgrip/wearedevelopers2022-demo/actions/workflows/deploypipeline.yml)

# WeAreDevelopers 2022

## Getting started with development

### API access

Create a file `.env.local` with the following content:

````
STORYBLOK_GRAPHQL_ENDPOINT='https://gapi.storyblok.com/v1/api'
STORYBLOK_GRAPHQL_TOKEN='***'
STORYBLOK_GRAPHQL_VERSION='draft'
NEXT_PUBLIC_DEV_MODE='offline'
```

## Requirements

- node 16.14.\*
- yarn

### Run the development server locally

This is a [Next.js](https://nextjs.org/) project.

First, run the development server:

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the react based rendered website.

### API routes

For CSR based data fetching [API routes](https://nextjs.org/docs/api-routes/introduction) are used. To see the swagger docs open [http://localhost:3000/api-doc](http://localhost:3000/api-doc).

### Generate API types

The project stictly uses [TypeScript](https://www.typescriptlang.org/). To use typed data from the first api touch, api based types are generated based on the schema from the Storyblok GraphQL API and the actual queries.

```bash
yarn storyblok-types
```
````
