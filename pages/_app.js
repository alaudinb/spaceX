import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { ApolloProvider, InMemoryCache, ApolloClient }from "@apollo/client";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../styles/index.css';



const client = new ApolloClient({ uri: "https://api.spacex.land/graphql", cache: new InMemoryCache(),});


function MyApp({ Component, pageProps }) {
  return <ApolloProvider client={client}><Component {...pageProps} /></ApolloProvider>
}

export default MyApp
