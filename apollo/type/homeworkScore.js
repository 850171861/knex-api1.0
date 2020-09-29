const homeworkScore = /* GraphQL */ `
  #附件作业表
  type  homeworkScore {
    id: ID
    seqId: ID
    createdAt: Date
    courseId: Date
    modifiedAt: Date
    deleted_at: Date
    fraction:Int
    schooluser_id:Int
    homework_id:ID
    remark:text
}
  
`

module.exports = homeworkScore
