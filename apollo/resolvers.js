const knex = require('knex')({
  client: 'pg', // postgresql数据库
  connection: {
    host: '127.0.0.1',
    user: '',
    password: '',
    database: 'test'
  }
})
/* import GraphQLDate from 'graphql-date' */

export const resolvers = {
/*   Date: GraphQLDate, */
  Query: {
    // 查询全部作业数据
    Homework: async () => knex('homework').select(),
    // 学生查看自己班级作业
    async cls_work (root, args, context) {
      return knex('homework').where('cls_id', '=', args.cls_id)
    },
    // 学生在列表点击查看作业详情
    async info_work (root, args, context) {
      return knex('homework').where('seq_id', '=', args.seq_id)
    },

    async UserInfoWork (root, args, context) {
      return knex('user_homework')
        .where('homework_id', '=', args.homework_id)
        .andWhere(builder => {
          return builder.where('seq_id', '=', args.seq_id)
        })
    },
    // 老师进入详情页
    async teacherInfoWork (root, args, context) {
      return knex('homework')
        .where('seq_id', '=', args.seq_id)
    },

    // 老师查看自己发布作业列表
    /*  async check_work (root, args, context) {
      var homework = await knex('homework').where('fraction', '=', args.seq_id)

      var schooluser_classes = await knex('schooluser_classes').where('class_id', '=', args.class_id)
      var user_homework = await knex('user_homework').where('is_submit', '=', 'false').andWhere(builder => {
        return builder.where('homework_id', '=', args.homework_id)
      })
      var arr = []
      // 当前没提交人数
      for (var i = 0; i < user_homework.length; i++) {
        arr.push(user_homework[i].is_submit)
      }
      for (var i = 0; i < homework.length; i++) {
        // 当前班的总人数
        homework[i].sum = parseInt(schooluser_classes.length)
        // 未提交人数
        homework[i].no_submit = parseInt(arr.length)
        // 已经提交人数
        homework[i].and_submit = homework[i].sum - parseInt(arr.length)
      }
      return homework
    }, */
    // 查询全部数据
    UserHomework: async () => knex('user_homework').select()

  },
  Mutation: {
    // 创建数据
    async create_Homework (root, args, context) {
      console.log(args)
      const result = await knex('homework')
        .insert({
          title: args.title,
          created_at: args.create_at,
          modified_at: args.modified_at,
          deleted_at: args.deleted_at,
          end_at: args.end_at,
          work_content: args.work_content,
          fraction: args.fraction,
          schooluser_id: args.schooluser_id,
          files: args.files
        }).returning('*')
      return null
    },

    // 修改数据
    async update_Homework (root, args, context) {
      console.log(args)
      const result = await knex('homework')
        .where('seq_id', '=', args.seq_id).update({
          title: args.title,
          created_at: args.create_at,
          modified_at: args.modified_at,
          deleted_at: args.deleted_at,
          end_at: args.end_at,
          work_content: args.work_content,
          fraction: args.fraction,
          schooluser_id: args.schooluser_id,
          files: args.files
        })
      return null
    },

    async delete_Homework (root, args, context) {
      const result = await knex('homework')
        .where('seq_id', '=', args.seq_id).del()
      return null
    },

    // user_homework
    async createUserHomework (root, args, context) {
      console.log(args)
      const result = await knex('user_homework')
        .insert({
          seq_id: args.seq_id,
          created_at: args.created_at,
          modified_at: args.modified_at,
          deleted_at: args.deleted_at,
          homework_id: args.homework_id,
          schooluser_id: args.schooluser_id,
          files: args.files,
          is_submit: args.is_submit,
          points: args.points,
          evaluation: args.evaluation
        }).returning('*')
      return null
    },

    // 修改数据
    async updateUserHomework (root, args, context) {
      console.log(args)
      const result = await knex('user_homework')
        .where('seq_id', '=', args.seq_id).update({
          seq_id: args.points,
          created_at: args.created_at,
          modified_at: args.modified_at,
          deleted_at: args.deleted_at,
          homework_id: args.homework_id,
          schooluser_id: args.schooluser_id,
          files: args.files,
          is_submit: args.is_submit,
          points: args.points,
          evaluation: args.evaluation
        })
      return null
    },

    async deleteUserHomework (root, args, context) {
      console.log(args)
      const result = await knex('user_homework')
        .where('seq_id', '=', args.seq_id).del()
      return null
    },

    // clsMember
    async updateClaMeber (root, args, context) {
      console.log(args)
      const result = await knex('schooluser_classes').insert({
        seq_id: args.seq_id,
        schooluser_id: args.schooluser_id,
        class_id: args.class_id
      }).returning('*')
      return null
    },

    // 学生撤回作业
    async withdraw (root, args, context) {
      const result = await knex('user_homework')
        .where('seq_id', '=', args.seq_id).update({
          is_submit: false
        })
      return null
    }

  }
}
