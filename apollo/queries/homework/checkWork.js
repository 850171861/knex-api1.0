const { checkWork } = require('../../../shared/db/models/homework')

export default async (doc, args, { user, loaders }) => {
  return checkWork()
}
