exports.up = async (knex) => {
  // - id: uuid
  // - seq_id: 短 id
  // - created_at: 建立時間
  // - modified_at: 修改時間
  // - deleted_at: 刪除時間
  // - name: 評估表模版名稱
  // - revision: 版本號
  // - code: 評估表模版代碼
  // - school_id: 學校 id
  // - sections: 評估表模版內容
  await knex.schema.createTable('assessment_templates', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
    table.increments('seq_id')

    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    table.string('name')
    table.integer('revision')
    table.string('code')
    table.string('school_id')
    table.json('sections')
  })

  // - id: uuid
  // - seq_id: 短 id
  // - created_at: 建立時間
  // - modified_at: 修改時間
  // - deleted_at: 刪除時間
  // - name: 評估表名稱
  // - assessment_form_id: 模版 id
  // - submissionStartDate: 老師可以入分的開始時間
  // - submissionEndDate: 老師可以入分的結束時間
  // - date_of_issue: 發行日期 (列印用)
  // - is_english: 是否英文的成績單
  // - cls_ids: 班級 id
  // - schooluser_ids: 有參與這次成績單的 schooluser 名單
  // - options: 其他 options
  // - school_id: 學校 id
  // - school_dashboard_id: Dashboard id
  // - title: 列印用
  // - subtitle: 列印用
  await knex.schema.createTable('assessment_reports', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
    table.increments('seq_id')

    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    table.string('name')
    table.string('assessment_template_id')
    table.timestamp('submissionStartDate')
    table.timestamp('submissionEndDate')
    table.timestamp('date_of_issue')
    table.boolean('is_english')
    table.specificType('cls_ids', 'text[]')
    table.specificType('schooluser_ids', 'text[]')
    table.json('options')
    table.string('school_id')
    table.string('school_dashboard_id')
    table.string('title')
    table.string('subtitle')
  })

  // - id: uuid
  // - seq_id: 短 id
  // - created_at: 建立時間
  // - modified_at: 修改時間
  // - deleted_at: 刪除時間
  // - schooluser_id: 學生 schooluser id
  // - (先不用) schooluser_name: 學生名字 (列印用, 以防他將來改名了)
  // - (先不用) schooluser_edu_no: 學生教青局號碼 (列印用)
  // - (先不用) cls_name: 班級名稱 (列印用)
  // - (先不用) num: 學生座號 (列印用)
  // - assessment_report_id: 評估表設置 id
  // - data: 評估表內容
  // - cls_id
  // - school_id: 學校 id
  // - school_dashboard_id: Dashboard id
  await knex.schema.createTable('assessments', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
    table.increments('seq_id')

    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')

    table.string('schooluser_id')
    table.string('assessment_report_id')
    table.json('data')
    table.string('cls_id')
    table.string('school_id')
    table.string('school_dashboard_id')
  })
}

exports.down = async (knex) => {
}
