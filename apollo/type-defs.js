 import { gql } from '@apollo/client'
/*const LowercaseString = require('./custom-scalars/LowercaseString') */


export const typeDefs = gql`
  scalar JSON
  scalar JSONObject 
  scalar String
  

   type Homework{
     # 短id
    seq_id:Int
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

  type UserHomework{
    # 短id
    seq_id:Int
    # 建立時間
    created_at:String
    # 修改時間
    modified_at:String
     # 刪除時間
    deleted_at:String
     # 連school_homework的id
    homework_id:String
    #學生ID
    schooluser_id:String
    #是否提交过作业，默认true
    is_submit:Boolean
    #該作業分數
    points:Int
    #評語
    evaluation:String
    #附件
    files:JSON

    class_id: String

  }

     #clsMember
     type ClaMeber{
    # uuid
    id: ID!
    # 短id
    seq_id: Int
    # 建立時間
    createdAt: String
    # 修改時間
    modifiedAt: String
    # 對應用戶的id
    schooluser_id: String
    # 對應班級的id
    class_id: String
    # 在班上的學號，只有學生才有
    num: Int
    # 是否為學生
    isStudent: Boolean
    # 是否為班主任
    isClsTeacher: Boolean
    # 是否為老師
    isTeacher: Boolean
  }

  
  
 
  

  type Query {
    Homework : [Homework]
    cls_work(cls_id:ID!):[Homework]
    info_work(seq_id:ID!):[Homework]
    check_work(seq_id:ID!,class_id:String!,homework_id:String!):[Homework]
    UserHomework: [UserHomework]
    UserInfoWork(homework_id:String!,seq_id:String!):[UserHomework]
    countSum(class_id:ID!): [ClaMeber]
  }

  type Mutation {
    create_Homework(
      seq_id: Int,
      title: String,
      created_at: String,
      modified_at:String,
      deleted_at: String,
      end_at: String,
      work_content: String,
      fraction: String,
      cls_id: String,
      schooluser_id: String,
      files: JSON
    ) : [Homework]

    update_Homework(
      seq_id: Int,
      title: String,
      created_at: String,
      modified_at:String,
      deleted_at: String,
      end_at: String,
      work_content: String,
      fraction: String,
      cls_id: String,
      schooluser_id: String,
      files: JSON
    ): [Homework]

    delete_Homework(
      seq_id: Int
    ): [Homework]

   

   createUserHomework(
     seq_id:Int,
      created_at:String,
      modified_at:String,
      deleted_at:String,
      homework_id:String,
      schooluser_id:String,
      files: JSON,
      is_submit:Boolean,
      points:String,
      evaluation:String
   ):[UserHomework]
    

   updateUserHomework(
    seq_id:Int,
      created_at:String
      modified_at:String,
      deleted_at:String,
      homework_id:String,
      schooluser_id:String,
      files: JSON,
      is_submit:Boolean,
      points:Int,
      evaluation:String
     
   ):[UserHomework]


   deleteUserHomework(
      seq_id: Int
    ): [UserHomework]



    updateClaMeber(
      seq_id: Int,
      class_id:String,
      schooluser_id:String
   ):[ClaMeber]
  

  #学生撤回
  withdraw(
    seq_id:Int,
    is_submit:Boolean
  ): [UserHomework]
    
  }
`