import { yoga } from "@elysiajs/graphql-yoga";
import { DemoGraphQL } from "@GraphQL/Schemas/DemoGraphQL";
import { DemoResolver } from "@GraphQL/Resolvers/DemoResolver";

export const YogaConfig = yoga({
  typeDefs: [DemoGraphQL],
  resolvers: {
    Query: {
      hello: DemoResolver.hello
    },
  },
});
