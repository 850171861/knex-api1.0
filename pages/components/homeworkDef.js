import { 
  Button,
  Flex,
  Box,
  Text,
  Radio,
  RadioGroup,
  Heading
} from "@chakra-ui/core";
import { BsFileText,BsFillGrid1X2Fill,BsSearch} from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { FiChevronRight } from "react-icons/fi";
const HomeworkDef = ({children,...props}) => {
  return(
    <Box {...props}>
    <Flex
      align="center" 
      borderBottom="1px solid #C4C4C4" 
      h="56px">
      <Flex align="flex-end" w={1/3} justify="center">
        <Text>SCHOOL</Text>
      </Flex>
      <Flex align="center" w={1/3} justify="center">
        <Flex textAlign="center" color="#718096" mr="25px">
          <BsFileText />
          <span>首頁</span>
        </Flex>
        <Flex textAlign="center" mr="25px">
          <BsFillGrid1X2Fill />
          <span>學校專頁</span>
        </Flex>
        <Flex textAlign="center" color="#718096">
          <BsSearch />
          <span>搜索</span>
        </Flex>
      </Flex>
      <Flex w={1/3} justify="center">
        <Text>
          G
        </Text>
      </Flex>
    </Flex>
    <Box position="absolute" top="70px" right="15%">
      <GrUserAdmin/>
      學校管理員
    </Box>
    <Flex justify="center" mt="28px" mb="28px">
      <Flex bg="white" justify="center" p="10px 20px" border="1px solid #C4C4C4">
        <Text>
          2019/2020學年（現在）
        </Text>
      </Flex>
      <Flex justify="center" p="10px 15px" fontSize="25px">
          <FiChevronRight />
      </Flex>
      <Flex bg="white"  justify="center" p="10px 20px" border="1px solid #C4C4C4">
        <Text>
          K1A
        </Text>
      </Flex>
    </Flex>
    <Box 
      w={{sm: "100%",md:'100%',lg:"960px"}}
      bg="white" 
      shadow="0px 0px 12px #D7D6CB" 
      m="0 auto" 
      textAlign="center" 
      p="20px">
        {children}
    </Box> 
  </Box>
  )
}

export default HomeworkDef