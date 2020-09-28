import { gql } from '@apollo/client'
/*const LowercaseString = require('./custom-scalars/LowercaseString') */
const UserHomework = gql`
  scalar JSON
  scalar JSONObject 
  scalar String
`
module.exports =  UserHomework

//   # type UserHomework{
//   #   # 短id
//   #   seq_id:Int
//   #   # 建立時間
//   #   created_at:String
//   #   # 修改時間
//   #   modified_at:String
//   #    # 刪除時間
//   #   deleted_at:String
//   #    # 連school_homework的id
//   #   homework_id:String
//   #   #學生ID
//   #   schooluser_id:String
//   #   #是否提交过作业，默认true
//   #   is_submit:Boolean
//   #   #該作業分數
//   #   points:Int
//   #   #評語
//   #   evaluation:String
//   #   #附件
//   #   files:JSON
//   #   class_id: String
//   # }

//   #clsMember
//   # type ClaMeber{
//   #   # uuid
//   #   id: ID!
//   #   # 短id
//   #   seq_id: Int
//   #   # 建立時間
//   #   createdAt: String
//   #   # 修改時間
//   #   modifiedAt: String
//   #   # 對應用戶的id
//   #   schooluser_id: String
//   #   # 對應班級的id
//   #   class_id: String
//   #   # 在班上的學號，只有學生才有
//   #   num: Int
//   #   # 是否為學生
//   #   isStudent: Boolean
//   #   # 是否為班主任
//   #   isClsTeacher: Boolean
//   #   # 是否為老師
//   #   isTeacher: Boolean
//   # }

//   # type Query {
//   #   UserHomework: [UserHomework]
//   #   UserInfoWork(homework_id:String!,seq_id:String!):[UserHomework]
//   #   countSum(class_id:ID!): [ClaMeber]
//   # }

// #   type Mutation {
// #    createUserHomework(
// #      seq_id:Int,
// #       created_at:String,
// #       modified_at:String,
// #       deleted_at:String,
// #       homework_id:String,
// #       schooluser_id:String,
// #       files: JSON,
// #       is_submit:Boolean,
// #       points:String,
// #       evaluation:String
// #    ):[UserHomework]
    

// #    updateUserHomework(
// #     seq_id:Int,
// #       created_at:String
// #       modified_at:String,
// #       deleted_at:String,
// #       homework_id:String,
// #       schooluser_id:String,
// #       files: JSON,
// #       is_submit:Boolean,
// #       points:Int,
// #       evaluation:String
     
// #    ):[UserHomework]


// #    deleteUserHomework(
// #       seq_id: Int
// #     ): [UserHomework]
    
// #   #   updateClaMeber(
// #   #     seq_id: Int,
// #   #     class_id:String,
// #   #     schooluser_id:String
// #   #  ):[ClaMeber]

// #   #学生撤回
// #   withdraw(
// #     seq_id:Int,
// #     is_submit:Boolean
// #   ): [UserHomework]
// # }

