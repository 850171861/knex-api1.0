
import { useMutation } from '@apollo/client'
import { 
  Flex,
  Heading,
  Box,
  Icon
} from "@chakra-ui/core";

import {delHomework} from '../shared/mutations/homework/delHomework'


//時間轉換
function time(val){
  let Y = val.getFullYear()
  let M = val.getMonth() +1
  let D = val.getDate()
  let H = val.getHours()
  let m = val.getMinutes()
  let S = val.getSeconds()
  return (Y + '-' + M + '-' + D + ' ' + H + ':' + m + ':' + S)
}

const HomeworkList = ({data}) => {

  let startTime = time(new Date(parseInt(data.created_at)))
  let endTime = time(new Date(parseInt(data.end_at)))

 const [delTODO] = useMutation(delHomework)

  return (
    <Box mt="15px" borderBottom="1px solid #ACACAC" pb="10px" pos="relative">
      <Heading as="h3" fontSize={["18px","18px", "18px", "20px"]}>
        <Flex justify="center">
          <Flex mr="10px">{data.title}</Flex>
        </Flex>
      </Heading>
      <Flex justify="center" fontSize={["5px","10px", "15px", "20px"]} mt="10px">
        <Flex mr="10px" color="#727272">全部人數：{data.sum}</Flex>
        <Flex mr="10px" color="#0AAF25">已提交人數：{data.and_submit}</Flex>
        <Flex mr="10px" color="#C10A0A">未提交人數：{data.no_submit}</Flex>
      </Flex>
      <Flex justify="center" fontSize={["5px","10px", "15px", "20px"]}>
        <Flex mr="10px" color="#727272">發佈時間：{startTime}</Flex>
        <Flex mr="10px" color="#727272">截止時間：{endTime}</Flex>
      </Flex>
      <Flex pos="absolute" top="0" right="0">
        <Box bg="#4B8CEF" w="32px" h="32px" lineHeight="28px" mr="10px" borderRadius="7px">
          <Icon name="edit" color="white" size="18px"/>
        </Box>
        <Box 
          bg="red.500" 
          w="32px" 
          h="32px" 
          lineHeight="28px" 
          borderRadius="7px" 
          onClick={(e) => {
            e.preventDefault()
            delTODO({ variables: { seq_id: data.seq_id } })
          }}
        >
          <Icon name="delete" color="white" size="18px"/>
        </Box>
      </Flex>
    </Box>
  )
}
export default HomeworkList
