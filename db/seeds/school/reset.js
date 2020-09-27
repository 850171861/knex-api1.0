module.exports = async function (knex) {
    // Deletes ALL existing entries
    // 刪除 schools 所有資料
   /*  await knex('schoolusers').del()
    await knex('classes').del() */
    await knex('schooluser_classes').del()
  }
  