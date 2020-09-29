import { makeExecutableSchema } from 'graphql-tools'
// import { typeDefs } from './type-defs'
// ================ queries ================
/* const homeworksByClsId = require('./queries/homework/homeworksByClsId') */
const homeworksQuery = require('./queries/homework')

// import { resolvers } from './resolvers'
// import { Homework } from './type/homework'
// import { userHomework } from './type/userHomework'
// import { Schooluser } from './type/schooluser'
const merge = require('lodash/merge')
const scalars = require('./type/scalars')
// const resolvers = require('./resolvers')
// ================ type ================
const Homework = require('./type/Homework')
// ================ mutations ================
const createHomework = require('./mutations/homework')

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
  homeworksQuery,
  // ===== mutaitions =====
  createHomework
)
export const schema = makeExecutableSchema({
  typeDefs: [
    Root,
    scalars.typeDefs,
    Homework
  ],
  resolvers
})
