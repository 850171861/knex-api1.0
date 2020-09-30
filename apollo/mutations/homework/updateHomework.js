const { updateHomework } = require('../../../shared/db/models/homework')

export default async (_, args, { user, loaders }) => {
  return updateHomework(args)
}
