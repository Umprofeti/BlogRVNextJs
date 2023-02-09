import { ApolloClient, InMemoryCache } from "@apollo/client";

const client2 = new ApolloClient({
    uri: `https://panel.rendezvouscorp.com/api/graphql`,
    cache: new InMemoryCache(),
});

export default client2; 