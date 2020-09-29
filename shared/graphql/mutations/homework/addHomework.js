import gql from 'graphql-tag'
export const delHomework = gql`
  mutation AddHomeworkMutation($seq_id:Int){
    delete_Homework(seq_id:$seq_id){
      seq_id
    }
  }
`
