const _ = require('lodash')

let i = 0

const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++i}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = generateUUID('17000000')

// 通告回復期限隨機延長天時間
const submissionDateEnd = () => {
  const currentDate = new Date().setDate(new Date().getDate() + parseInt(Math.random() * 10) + 1)
  return new Date(currentDate)
}

module.exports = async function (knex, ctx) {
  // 以管理员作为创建者
  const schoolusersByAdmin = _.filter(ctx.schoolusers.docs, { school_id: ctx.schools.obj['school-madalena'].id, is_admin: true })

  // 隨機拿管理員
  const creator = () => {
    const schooluser = schoolusersByAdmin[parseInt(Math.random() * schoolusersByAdmin.length)]
    return schooluser.id
  }

  // **madalena 年级**
  const madalenaClasses = _.filter(ctx.classes.docs, doc => doc.school_id === ctx.schools.obj['school-madalena'].id)
  const clsIds = []
  for (let i = 0; i < parseInt(Math.random() * 10); i++) {
    const clsRandomData = madalenaClasses[parseInt(Math.random() * madalenaClasses.length)]
    clsIds.push(clsRandomData.id)
  }
  const cls = madalenaClasses[parseInt(Math.random() * madalenaClasses.length)]
  const notifications = [
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-madalena'].id,
      // 創建者
      creator_id: creator(),
      // 發佈時間
      date_of_issue: new Date(),
      title: '畢業典禮安排',
      // 通告的內文
      content: '',
      // 是否需要回復
      is_reply: false,
      is_all_teachers: true,
      is_all_students: true,
      is_issued: true
    },
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-madalena'].id,
      // 創建者
      creator_id: creator(),
      // 發佈時間
      date_of_issue: new Date(),
      title: '教學講座',
      // 通告的內文
      content: '',
      // 是否需要回復
      is_reply: false,
      cls_ids: clsIds,
      is_issued: true
    },

    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-madalena'].id,
      // 創建者
      creator_id: creator(),
      // 發佈時間
      date_of_issue: new Date(),
      title: '關於運動會',
      // 通告的內文
      content: '',
      // 是否需要回復
      is_reply: false,
      is_all_teachers: true,
      is_all_students: true,
      is_issued: true
    },
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-madalena'].id,
      // 創建者
      creator_id: creator(),
      // 發佈時間
      date_of_issue: new Date(),
      title: '關於公開課',
      // 通告的內文
      content: '',
      // 回復期限
      submission_date_end: submissionDateEnd(),
      // 是否需要回復
      is_reply: false,
      is_all_teachers: true,
      is_issued: true
    },
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-madalena'].id,
      // 創建者
      creator_id: creator(),
      // 發佈時間
      date_of_issue: new Date(),
      title: '關於班委會選舉',
      // 通告的內文
      content: '',
      // 回復期限
      submission_date_end: submissionDateEnd(),
      // 是否需要回復
      is_reply: false,
      is_all_teachers: true,
      is_issued: true
    },
    {
      id: uuid(),
      created_at: new Date(),
      school_id: ctx.schools.obj['school-madalena'].id,
      // 創建者
      creator_id: creator(),
      // 發佈時間
      date_of_issue: new Date(),
      title: `關於${cls.name}班班會會議`,
      // 通告的內文
      content: '',
      // 回復期限
      submission_date_end: submissionDateEnd(),
      // 是否需要回復
      is_reply: false,
      cls_ids: [cls.id],
      is_issued: true
    }
  ]

  // 資料庫操作
  await knex('notifications').insert([
    ...notifications
  ])

  // 讀取資料
  const docs = await knex.select().table('notifications')

  // 返回
  ctx.notifications = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.id
    })
  }
}
