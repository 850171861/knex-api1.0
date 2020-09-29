const _ = require('lodash')

let i = 0

const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++i}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = generateUUID('18000000')

module.exports = async function (knex, ctx) {
  const attendanceRules = [
    {
      id: uuid(),
      created_at: new Date(),

      school_id: ctx.schools.obj['school-region'].id,
      days: [1, 2, 3, 4, 5],
      remarks: '平日出席規則-上午',
      priority: 1,
      start_date: '1970-01-01 00:00:00.000+08',
      end_date: '2500-12-31 23:59:59.999+08',
      cls_ids: [ctx.classes.obj['20-k1a'].id, ctx.classes.obj['20-k1b'].id],
      schooluser_ids: [],
      is_exempt: false
    },
    {
      id: uuid(),
      created_at: new Date(),

      school_id: ctx.schools.obj['school-region'].id,
      days: [1, 2, 3, 4, 5],
      remarks: '平日出席規則-下午',
      priority: 1,
      start_date: '1970-01-01 00:00:00.000+08',
      end_date: '2500-12-31 23:59:59.999+08',
      cls_ids: [ctx.classes.obj['20-k1a'].id, ctx.classes.obj['20-k1b'].id],
      schooluser_ids: [],
      is_exempt: false
    },
    {
      id: uuid(),
      created_at: new Date(),

      school_id: ctx.schools.obj['school-region'].id,
      days: [1, 2, 3, 4, 5],
      remarks: '延後放學規則-上午',
      priority: 2,
      start_date: '2020-09-01 00:00:00.000+08',
      end_date: '2020-09-01 23:59:59.999+08',
      cls_ids: [ctx.classes.obj['20-k1b'].id],
      schooluser_ids: [],
      is_exempt: false
    },
    {
      id: uuid(),
      created_at: new Date(),

      school_id: ctx.schools.obj['school-region'].id,
      days: [1, 2, 3, 4, 5],
      remarks: '延後放學規則-下午',
      priority: 2,
      start_date: '2020-09-01 00:00:00.000+08',
      end_date: '2020-09-01 23:59:59.999+08',
      cls_ids: [ctx.classes.obj['20-k1b'].id],
      schooluser_ids: [],
      is_exempt: false
    },

    {
      id: uuid(),
      created_at: new Date(),

      school_id: ctx.schools.obj['school-region'].id,
      days: [1, 2, 3, 4, 5],
      remarks: '校外教學',
      priority: 2,
      start_date: '2020-09-15 00:00:00.000+08',
      end_date: '2020-09-16 23:59:59.999+08',
      cls_ids: [ctx.classes.obj['20-k1b'].id],
      schooluser_ids: [],
      is_exempt: false
    },

    {
      id: uuid(),
      created_at: new Date(),

      school_id: ctx.schools.obj['school-region'].id,
      days: [4, 5],
      remarks: '中秋節放假',
      priority: 3,
      start_date: '2020-10-01 00:00:00.000+08',
      end_date: '2020-10-02 23:59:59.999+08',
      cls_ids: [ctx.classes.obj['20-k1a'].id, ctx.classes.obj['20-k1b'].id],
      schooluser_ids: [],
      is_exempt: false
    }
  ]

  // 資料庫操作
  await knex('attendance_rules').insert([
    ...attendanceRules
  ])

  // 讀取資料
  const docs = await knex.select().table('attendance_rules')

  // 返回
  ctx.attendanceRules = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.remarks
    })
  }
}
