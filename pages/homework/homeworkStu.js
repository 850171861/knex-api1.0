// import Link from 'next/link'
import {
  Box,
  Avatar,
  Flex
} from "@chakra-ui/core";
GrSearch
import { GrSearch } from "react-icons/gr";
export default function homeworkList() {
  return (
    <Flex>
      <Avatar name="kita" src="../pic/1.jpg"/>
      <Box>
        <Text>姓名：kita</Text>
        <Text>學號：01</Text>
        <Text>評分：未評分</Text>
      </Box>
      <Box>
        準時交
      </Box>
      <Box color="white" bg="#4B8CEF" >
        <GrSearch />
      </Box>
    </Flex>
  )
}
