
exports.up = function (knex) {
  return knex.schema.createTable('online_courses', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')
    // (搜尋用) 組織名字: ex. 聖若瑟教區中學, 化地碼, 比人 filter 課程用
    table.string('org_name')
    // 課程創辨人
    table.string('user_id')
    // (搜尋用) 課程類型： 公開課 (public), 私家課所有人都可以入 (unlisted), 私家課有link先可以入 (private)
    table.string('type')
    // youtube 網址
    table.string('video_url')
    // hangout 網址
    table.string('live_url')
    // (搜尋用) 老師名稱
    table.string('teacher_name')
    // 老師簡介
    table.text('teacher_description')
    // 課程簡介
    table.text('description')
    // 課程網址: https://macau.school/course/{course_id}
    // 秘密邀請用的網址: https://macau.school/enroll/{enroll_token}
    table.string('enroll_token')
    // (搜尋用) 教咩課
    table.string('topic')
    // (搜尋用) 對象: [高一，高二，高三]
    table.specificType('targets', 'text[]')
    // 標簽: 中文科
    table.specificType('tags', 'text[]')
    // (搜尋用) room 播放時間
    table.timestamp('start_date')
    // (搜尋用) room 結束時間
    table.timestamp('end_date')
    // (搜尋用) 可不可見, admin 用黎 block room 用
    table.boolean('visible')
    // 圖片
    table.string('image')

    // 有 (搜尋用) 的全部加 index
    table.index('org_name', 'org_name_idx')
    table.index('type', 'type_idx')
    table.index('teacher_name', 'teacher_name_idx')
    table.index('topic', 'topic_idx')
    table.index('targets', 'targets_idx')
    table.index('start_date', 'start_date_idx')
    table.index('tags', 'tags_idx')
    table.index('end_date', 'end_date_idx')
    table.index('visible', 'visible_idx')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('online_courses')
}
