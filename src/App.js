import "./styles.css";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "@apollo/client";

const client1 = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const client2 = new ApolloClient({
  uri: "http://localhost:4001/graphql"
});

function DataWrapper({ children }) {
  return (
    <ApolloProvider client={client1}>
      <ApolloProvider client={client2}>{children}</ApolloProvider>
    </ApolloProvider>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
