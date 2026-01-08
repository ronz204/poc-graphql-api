import "./index.css";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client/react";
import { PlaygroundPage } from "@Features/Playground/Page";
import { BrowserRouter, Routes, Route } from "react-router";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const root = document.getElementById("root")!;

const link = new HttpLink({
  uri: "http://localhost:3000/graphql",
});

const apollo = new ApolloClient({
  link, cache: new InMemoryCache(),
});

createRoot(root).render(
  <ApolloProvider client={apollo}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlaygroundPage />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
);
