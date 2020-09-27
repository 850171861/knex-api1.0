const Cls = /* GraphQL */`
  type Cls{
    # uuid
    id: ID!
    # 短id
    seqId: Int
    # 建立時間
    createdAt: Date!
    # 修改時間
    modifiedAt: Date
    # 刪除時間
    deletedAt: Date

    # 班級名稱
    name: String
    # 班級的英文名稱
    englishName: String
    # 班級的slug
    slug: String
  }

 `

module.exports = Cls
