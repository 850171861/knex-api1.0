const schooluserHomework = /* GraphQL */ `
  #作业表
type  schooluserHomework {
    id: ID
    seqId: ID
    createAt:Date
    modifiedAt:Date
    deleteAt:Date
    homeworkId:ID
    remark:String
    submitAt:Date
    schooluserId:ID
}
  
`

module.exports = schooluserHomework
