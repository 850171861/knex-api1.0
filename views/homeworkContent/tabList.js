import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text
} from '@chakra-ui/core'

import HomeworkStu from './homeworkStu'

const HomeworkTabList = () => {
  return (
    <Box>
      <Text textAlign={['left']} mt='20px'>查看作業：</Text>
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
            <HomeworkStu />
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
  )
}

export default HomeworkTabList
