import gql from 'graphql-tag'
export const delHomework = gql`
    mutation delHomeworkMutation($id:String){
      delHomework(id:$id){
        id
      }
    }
  `
