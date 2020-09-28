const { createHomework } = require('../../../shared/db/models/homework')

export default async (_, args, { user, loaders }) => {
  return createHomework(args)
}
