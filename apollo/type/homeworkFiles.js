const userHomework = /* GraphQL */ `
  #附件作业表
  type  userHomework {
    id: ID
    seqId: ID
    clsId: ID
    courseId: ID
    createdAt: ID
    creatorId: ID
    deletedAt:Date
    files_name:String
    files_type:String
    files_url:String
    modifiedAt:Date
    homeworkId:ID
    schooluser_homework_id:ID
}
  
`

module.exports = userHomework
