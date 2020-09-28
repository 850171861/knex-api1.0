const { getHomeWork } = require('../../../shared/db/models/homework')

export default async (doc, args, { user, loaders }) => {
  return getHomeWork()
}
