// import { gql } from '@apollo/client'
import gql from 'graphql-tag'
const Homework = gql`
 #作业表的type
type Homework {
    id:ID     
    seq_id:ID   
    created_at: Date
    modified_at: Date
    deleted_at: Date
    school_id: ID
    cls_id: ID
    course_id: ID
    creator_id: ID
    title: String
    content: String
    fraction:Int
    submit_at:Date
    issued_at:Date
    allowSubmit_at:Date
    end_at: Date

    count: Int

    #  clsMember: [ClsMember]
}

  extend type Query {
    homeworksByClsId(clsId: String): [Homework]
  }

  input createHomeworkInput {
    id:ID     
    seqId:ID   
    createdAt: Date
    modifiedAt: Date
    deletedAt: Date
    schoolId: ID
    clsId: ID
    courseId: ID
    creatorId: ID
    title: String
    content: String
    fraction:Int
    submitAt:Date
    issuedAt:Date
    allowSubmitAt:Date
    endAt: Date
  }
  

  extend type Mutation {
    createHomework(input: createHomeworkInput): [Homework]
  }

`
module.exports = Homework
