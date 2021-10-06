import React from 'react';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import Constants from 'expo-constants';
import createApolloClient from './src/utils/apolloClient';

const apolloClient = createApolloClient(Constants.manifest.extra.apolloUri);

export default function App() {
  //console.log(Constants.manifest.extra);
  return (
    <>
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main/>
      </ApolloProvider>
    </NativeRouter>
    </>
  );
}


