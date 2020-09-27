const Homework = /* GraphQL */`
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
    cls_id: String
  #老師ID
    schooluser_id: String
#附件
    files: JSON

    
  }  
  }

`



module.exports = Homework
