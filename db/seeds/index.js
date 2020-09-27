const reset = require('./school/reset')
const addHomework = require('./school/addHomework')
const addUserHomework = require('./school/addUserHomework')
const classes = require('./school/classes')
const schooluser = require('./school/schooluser')
const clsMember = require('./school/clsMember')

const ctx = {}

exports.seed = async function (knex) {
    // 刪除 schools 所有資料
    await reset(knex)
  // 添加作業
  await addHomework(knex, ctx)
  console.log('> added schools:', ctx.addHomework.docs.length)

  await addUserHomework(knex, ctx)
  console.log('> added schools:', ctx.addUserHomework.docs.length)
  
  await classes(knex, ctx)
  //console.log('> added classes:', ctx.classes.docs.length)

  await schooluser(knex, ctx)
  // console.log('> added schooluser:', ctx.schooluser.docs.length)

  await clsMember(knex, ctx)
   console.log('> added clsMember:', ctx.clsMember.docs.length)



}
