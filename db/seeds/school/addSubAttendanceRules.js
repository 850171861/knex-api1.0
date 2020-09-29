const _ = require('lodash')

let i = 0

const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++i}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = generateUUID('19000000')

module.exports = async function (knex, ctx) {
  const subattendanceRules = [
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '08:00',
      end_time: '09:00',
      rule_id: ctx.attendanceRules.obj['平日出席規則-上午'].id,
      remarks: '上午到校時間',
      lates: 0,
      absenteeisms: 0,
      is_exempt: false,
      is_after_school: false,
      section: 1
    },
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '09:00',
      end_time: '10:00',
      rule_id: ctx.attendanceRules.obj['平日出席規則-上午'].id,
      remarks: '第一節課',
      lates: 1,
      absenteeisms: 0,
      is_exempt: false,
      is_after_school: false,
      section: 1
    },
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '10:00',
      end_time: '11:00',
      rule_id: ctx.attendanceRules.obj['平日出席規則-上午'].id,
      remarks: '第二節課',
      lates: 0,
      absenteeisms: 1,
      is_exempt: false,
      is_after_school: false,
      section: 1
    },
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '11:00',
      end_time: '12:00',
      rule_id: ctx.attendanceRules.obj['平日出席規則-上午'].id,
      remarks: '第三節課',
      lates: 0,
      absenteeisms: 2,
      is_exempt: false,
      is_after_school: false,
      section: 1
    },
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '12:00',
      end_time: '12:30',
      rule_id: ctx.attendanceRules.obj['平日出席規則-上午'].id,
      remarks: '上午離校打卡時間',
      lates: 0,
      absenteeisms: 3,
      is_exempt: false,
      is_after_school: true,
      section: 1
    },

    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '13:00',
      end_time: '14:00',
      rule_id: ctx.attendanceRules.obj['平日出席規則-下午'].id,
      remarks: '下午到校時間',
      lates: 0,
      absenteeisms: 0,
      is_exempt: false,
      is_after_school: false,
      section: 2
    },
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '14:00',
      end_time: '15:00',
      rule_id: ctx.attendanceRules.obj['平日出席規則-下午'].id,
      remarks: '第四節課',
      lates: 1,
      absenteeisms: 0,
      is_exempt: false,
      is_after_school: false,
      section: 2
    },
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '15:00',
      end_time: '16:00',
      rule_id: ctx.attendanceRules.obj['平日出席規則-下午'].id,
      remarks: '第五節課',
      lates: 0,
      absenteeisms: 1,
      is_exempt: false,
      is_after_school: false,
      section: 2
    },
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '16:00',
      end_time: '17:00',
      rule_id: ctx.attendanceRules.obj['平日出席規則-下午'].id,
      remarks: '第六節課',
      lates: 0,
      absenteeisms: 2,
      is_exempt: false,
      is_after_school: false,
      section: 2
    },
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '17:00',
      end_time: '23:00',
      rule_id: ctx.attendanceRules.obj['平日出席規則-下午'].id,
      remarks: '下午離校打卡時間',
      lates: 0,
      absenteeisms: 3,
      is_exempt: false,
      is_after_school: true,
      section: 2
    },

    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '07:00',
      end_time: '08:00',
      rule_id: ctx.attendanceRules.obj['校外教學'].id,
      remarks: '校外教學',
      lates: 0,
      absenteeisms: 0,
      is_exempt: false,
      is_after_school: false,
      section: 1
    },
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '08:00',
      end_time: '18:00',
      rule_id: ctx.attendanceRules.obj['校外教學'].id,
      remarks: '校外教學',
      lates: 1,
      absenteeisms: 0,
      is_exempt: false,
      is_after_school: false,
      section: 1
    },
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '18:00',
      end_time: '23:00',
      rule_id: ctx.attendanceRules.obj['校外教學'].id,
      remarks: '校外教學',
      lates: 0,
      absenteeisms: 8,
      is_exempt: false,
      is_after_school: true,
      section: 1
    },

    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '07:00',
      end_time: '18:00',
      rule_id: ctx.attendanceRules.obj['中秋節放假'].id,
      remarks: '中秋節放假',
      lates: 0,
      absenteeisms: 0,
      is_exempt: true,
      is_after_school: false,
      section: 1
    },

    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '09:00',
      end_time: '10:00',
      rule_id: ctx.attendanceRules.obj['延後放學規則-上午'].id,
      remarks: '上午到校時間',
      lates: 0,
      absenteeisms: 0,
      is_exempt: false,
      is_after_school: false,
      section: 1
    },
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '10:00',
      end_time: '11:00',
      rule_id: ctx.attendanceRules.obj['延後放學規則-上午'].id,
      remarks: '第一節課',
      lates: 1,
      absenteeisms: 0,
      is_exempt: false,
      is_after_school: false,
      section: 1
    },
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '11:00',
      end_time: '12:00',
      rule_id: ctx.attendanceRules.obj['延後放學規則-上午'].id,
      remarks: '第二節課',
      lates: 0,
      absenteeisms: 1,
      is_exempt: false,
      is_after_school: false,
      section: 1
    },
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '12:00',
      end_time: '13:00',
      rule_id: ctx.attendanceRules.obj['延後放學規則-上午'].id,
      remarks: '第三節課',
      lates: 0,
      absenteeisms: 2,
      is_exempt: false,
      is_after_school: false,
      section: 1
    },
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '13:00',
      end_time: '13:30',
      rule_id: ctx.attendanceRules.obj['延後放學規則-上午'].id,
      remarks: '上午離校打卡時間',
      lates: 0,
      absenteeisms: 3,
      is_exempt: false,
      is_after_school: true,
      section: 1
    },

    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '14:00',
      end_time: '15:00',
      rule_id: ctx.attendanceRules.obj['延後放學規則-下午'].id,
      remarks: '下午到校時間',
      lates: 0,
      absenteeisms: 0,
      is_exempt: false,
      is_after_school: false,
      section: 2
    },
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '15:00',
      end_time: '16:00',
      rule_id: ctx.attendanceRules.obj['延後放學規則-下午'].id,
      remarks: '第四節課',
      lates: 1,
      absenteeisms: 0,
      is_exempt: false,
      is_after_school: false,
      section: 2
    },
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '16:00',
      end_time: '17:00',
      rule_id: ctx.attendanceRules.obj['延後放學規則-下午'].id,
      remarks: '第五節課',
      lates: 0,
      absenteeisms: 1,
      is_exempt: false,
      is_after_school: false,
      section: 2
    },
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '17:00',
      end_time: '18:00',
      rule_id: ctx.attendanceRules.obj['延後放學規則-下午'].id,
      remarks: '第六節課',
      lates: 0,
      absenteeisms: 2,
      is_exempt: false,
      is_after_school: false,
      section: 2
    },
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-region'].id,
      start_time: '18:00',
      end_time: '23:00',
      rule_id: ctx.attendanceRules.obj['延後放學規則-下午'].id,
      remarks: '下午離校打卡時間',
      lates: 0,
      absenteeisms: 3,
      is_exempt: false,
      is_after_school: true,
      section: 2
    }
  ]

  // 資料庫操作
  await knex('sub_attendance_rules').insert([
    ...subattendanceRules
  ])

  // 讀取資料
  const docs = await knex.select().table('sub_attendance_rules')

  // 返回
  ctx.subAttendanceRules = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.id
    })
  }
}
