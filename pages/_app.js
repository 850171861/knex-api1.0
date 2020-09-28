import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/client'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import './index.css'
// import customTheme from "./theme"

export default function App ({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ThemeProvider>
      <CSSReset />
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  )
}
