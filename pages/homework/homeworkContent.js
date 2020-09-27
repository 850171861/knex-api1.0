import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
// import { initializeApollo } from '../../apollo/client'

import { 
  Text,
  Heading,
  Textarea,
  Flex,
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel,
  Box,
  Button,
  Image,
  Grid
} from "@chakra-ui/core";
import HomeworkDef from "../components/homeworkDef"

// const ViewerQuery = gql`
//   query ViewerQuery {
//     viewer {
//       id
//       name
//       status
//     }
//   }
// `

const Index = () => {
  return (
  <HomeworkDef >
    <Box p="10px 30px">
      <Heading as="h3" size="lg" mb="10px">2020-09-25 K1A 語文作業</Heading>
      <Text borderBottom="1px solid black" pb="10px">
        發佈時間：2020-09-24 18:00  截止時間：2020-09-25 08:30 滿分：100
      </Text>
      <Box p="0 15px">
        <Flex mt="20px">
          <Flex>
            作業說明：
          </Flex>
          <Flex w="80%">
            <Textarea
              value="asdkljklxzjc"
              placeholder="Here is a sample placeholder"
              size="sm"
            />
          </Flex>
        </Flex>
          <Text textAlign={['left']} mt="20px">作業對象：全班同學</Text>
          {/* start */}
          <Flex mt="20px"> 
            <Flex w="103%">
              <Text>
                作業附件：
              </Text>
            </Flex>
            <Box>
              <Box textAlign="start" mb="20px">
                <Button variantColor="teal" variant="outline" h="24px" mr="10px">查看附件</Button>
                <span>3個附件a</span>
              </Box>
              <Grid templateColumns={{sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"}} gap={6}>
                <Image src="https://bit.ly/sage-adebayo" />
                <Image src="https://bit.ly/sage-adebayo" />
                <Image src="https://bit.ly/sage-adebayo" />
                <Image src="https://bit.ly/sage-adebayo" />
              </Grid>
            </Box>
          </Flex>
          {/* end */}
          <Text textAlign={['left']} mt="20px">查看作業：</Text>
        <Tabs>
          <TabList>
            <Tab>全部：25</Tab>
            <Tab>已提交:20</Tab>
            <Tab>準時交：19</Tab>
            <Tab>遲交：1</Tab>
            <Tab>未提交：5</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
            <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
            <TabPanel>
              <p>four!</p>
            </TabPanel>
            <TabPanel>
              <p>five!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  </HomeworkDef>
  )
}


export default Index
