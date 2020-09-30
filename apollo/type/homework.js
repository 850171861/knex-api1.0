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
  }

  input updateHomeworkInput {   
    id:ID
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
  }

   input delHomeworkInput {   
    id:ID
  } 
  

  extend type Mutation {
    createHomework(input: createHomeworkInput): [Homework]
    updateHomework(input: updateHomeworkInput): [Homework]
    delHomework(input: delHomeworkInput): [Homework] 
  }

`
module.exports = Homework
