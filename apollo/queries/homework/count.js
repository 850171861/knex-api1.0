const { getHomeWorksByClsId } = require('../../../shared/db/models/homework')

export default async (doc, args, { user, loaders }) => {
  return getHomeWorksByClsId(doc.cls_id)
}
