import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_GRAPHQL_DOMAIN}`,
    cache: new InMemoryCache(),
});

export default client; 