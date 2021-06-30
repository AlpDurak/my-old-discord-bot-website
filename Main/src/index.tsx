import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ChakraProvider, extendTheme, CSSReset, ColorModeProvider } from '@chakra-ui/react';

import '@fontsource/comfortaa';
import '@fontsource/open-sans';
import '@fontsource/ubuntu';
import '@fontsource/inter/800.css';

const colors = {
  brand: {
    900: "#1A74E2",
    500: "#3FA0EF",
    100: "#6BD0FF",
  },
  gray: {
    1000: "#2C323D"
  }
}

const fonts = {
  OpenSans: {
    regular: "Open Sans"
  },
  Comforta: {
    regular: "Comfortaa"
  },
  Ubuntu: {
    regular: "Ubuntu"
  },
  Inter: {
    regular: "Inter"
  },
  OMEGLE: {
    regular: '../fonts/OMEGLE.ttf'
  }
}

const theme = extendTheme({ colors, fonts })

const link = createHttpLink({
  uri: 'https://api.syfac.xyz/graphql',
  credentials: 'include'
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeProvider options={{ initialColorMode: "dark" }}>
        <CSSReset />
        <Router>
          <ApolloProvider client={client} >
            <App />
          </ApolloProvider>
        </Router>
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>, 
  document.getElementById('root')
);
