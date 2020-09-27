const Schooluser = /* GraphQL */ `
  type Schooluser {
    # uuid
    id: ID!
    # 建立時間
    createdAt: Date!
    # 修改時間
    modifiedAt: Date
    # 刪除時間
    deletedAt: Date
    # 姓名
    name: String
    # 電郵
    email: String

    # 是否學生
    isStudent: Boolean
    # 是否老師
    isTeacher: Boolean
    # 是否校長
    isDirector: Boolean
    # 是否管理員
    isAdmin: Boolean

    # 英文名
    englishName: String
    # 短 id
    seqId: Int 
  }
  
`

module.exports = Schooluser
