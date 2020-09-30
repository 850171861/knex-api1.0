const { delHomework } = require('../../../shared/db/models/homework')

export default async (_, args, { user, loaders }) => {
  console.log(args)
  return delHomework(args)
}
