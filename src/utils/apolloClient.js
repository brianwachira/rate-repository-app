import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = (link) => createHttpLink({
   // Replace the IP address part with your own IP address!
  uri: link,  
});

const createApolloClient = (link) => {
    return new ApolloClient({
      link: httpLink(link),
      cache: new InMemoryCache(),
    });
  };
  
  export default createApolloClient;