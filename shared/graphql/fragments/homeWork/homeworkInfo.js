import gql from 'graphql-tag'

export default gql`
fragment homeworkInfo on Homework {
  seq_id
  content
  title
  created_at
  modified_at
  deleted_at
  end_at
  work_content
  fraction
  calss_id
  schooluser_id
  files
}
`
