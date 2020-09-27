// import Link from 'next/link'
import { 
  Flex,
  Heading,
  Box
} from "@chakra-ui/core";
const HomeworkList = ({data}) => {
  return (
    <Box mt="15px" borderBottom="1px solid #ACACAC" pb="10px">
      <Heading as="h3" fontSize={["18px","18px", "18px", "20px"]}>
        <Flex justify="center">
          <Flex mr="10px">asd</Flex>
        </Flex>
      </Heading>
      <Flex justify="center" fontSize={["5px","10px", "15px", "20px"]} mt="10px">
        <Flex mr="10px" color="#727272">全部人數：12322</Flex>
        <Flex mr="10px" color="#0AAF25">已提交人數：312</Flex>
        <Flex mr="10px" color="#C10A0A">未提交人數：2525</Flex>
      </Flex>
      <Flex justify="center" fontSize={["5px","10px", "15px", "20px"]}>
        <Flex mr="10px" color="#727272">發佈時間：2020-09-24 18:00</Flex>
        <Flex mr="10px" color="#727272">截止時間：2020-09-25 18:00</Flex>
      </Flex>
    </Box>
  )
}
export default HomeworkList
