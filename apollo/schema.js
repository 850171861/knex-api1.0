// import { makeExecutableSchema } from 'graphql-tools'
const { makeExecutableSchema } = require('graphql-tools')
// import { typeDefs } from './type-defs'
// import { resolvers } from './resolvers'
// import { Homework } from './type/homework'
// import { userHomework } from './type/userHomework'
// import { Schooluser } from './type/schooluser'
const merge = require('lodash/merge')
const scalars = require('./type/scalars')
// const resolvers = require('./resolvers')

// ================ type ================
const Homework = require('./type/homework')
// ================ queries ================
const homeworkQuery = require('./queries/homework')
// ================ mutations ================
const homeworkMutation = require('./mutations/homework')

const Root = /* GraphQL */ `
  type Query {
    dummy: String
  }
  type Mutation {
    dummy: String
  }
  type Subscription {
    dummy: String
  }
  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`
const resolvers = merge(
  {},
  scalars.resolvers,
  // ===== queries =====
  homeworkQuery,
  // ===== mutaitions =====
  homeworkMutation
)
export const schema = makeExecutableSchema({
  typeDefs: [
    Root,
    scalars.typeDefs,
    // Schooluser,
    Homework
    // userHomework
  ],
  resolvers
})
