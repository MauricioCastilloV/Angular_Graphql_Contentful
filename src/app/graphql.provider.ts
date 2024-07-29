import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApplicationConfig, inject } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';

// const uri = 'https://graphql.contentful.com/content/v1/spaces/skwi4dk8g6ae/explore?access_token=95-iLsLkFMxUmGYTg0LQ136Abm-0q8PZLhEJNtjnfNk'; // <-- add the URL of the GraphQL server here
const uri = 'https://graphql.contentful.com/content/v1/spaces/skwi4dk8g6ae/environments/master?access_token=95-iLsLkFMxUmGYTg0LQ136Abm-0q8PZLhEJNtjnfNk';
export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}

export const graphqlProvider: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];

// export class ContentfulService {
//   private cdaClient = createClient({
//     space: environment.contentfulSpaceId,
//     accessToken: environment.contentfulAccessToken,
//     host: environment.contentfulApiUrl
//   });
// contentfulApiUrl: 'https://cdn.contentful.com',