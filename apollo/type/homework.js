// import { gql } from '@apollo/client'
import gql from 'graphql-tag'
const Homework = gql`
   type Homework {
    # 短id
    seq_id:Int
    #内容
    content:String
    # 标题
    title: String
    # 建立時間
    created_at: String
    # 修改時間
    modified_at:String
    # 刪除時間
    deleted_at: String
    #截至时间
    end_at: String
    #内容説明
    work_content: String
    #分數制
    fraction: String
    #班級ID
    calss_id: String
    #老師ID
    schooluser_id: String
    #附件
    files: JSON

    class_id:String
    is_submit:Boolean
    sum:Int
    no_submit:Int
    and_submit:Int
    homework_id:String
  }

  extend type Query {
    homeWork: [Homework]
    cls_work(cls_id:ID!):[Homework]
    info_work(seq_id:ID!):[Homework]
    check_work(seq_id:ID!,class_id:String!,homework_id:String):[Homework]
    teacherInfoWork(seq_id:String!):[Homework]
  }

  input createHomeworkInput {
      seqId: Int,
      title: String,
      createdAt: String,
      modifiedAt:String,
      deletedAt: String,
      endAt: String,
      workContent: String,
      fraction: String,
      clsId: String,
      schooluserId: String,
      files: JSON
  }
   


 

  extend type Mutation {
     createHomework(input: createHomeworkInput!): [Homework]
   
   """  createHomework(
      seq_id: Int,
      title: String,
      created_at: String,
      modified_at:String,
      deleted_at: String,
      end_at: String,
      work_content: String,
      fraction: Int,
      cls_id: String,
      schooluser_id: String,
      files: JSON
    ) : [Homework] """

  

    delete_Homework(
      seq_id: Int
    ): [Homework]
}

`
module.exports = Homework
/*  """  updateHomework(
      seqId: Int,
      title: String,
      createdAt: String,
      modifiedAt:String,
      deletedAt: String,
      endAt: String,
      workContent: String,
      fraction: String,
      clsId: String,
      schooluserId: String,
      files: JSON
    ): [Homework]   """ */
