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
  Grid,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/core'
import NextLink from 'next/link'
import HomeworkDef from '../../components/homeworkDef'
import { Field, Form, Formik } from 'formik'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

const SbumitWork = () => {
  const createdHomework = gql`
      mutation createdWorkList($title: String,  $work_content: String, $fraction: String) {
         create_Homework(title: $title, work_content: $work_content, fraction: $fraction) {
            end_at
         }
      }
   `
  const [createdHW] = useMutation(createdHomework)

  return (
    <HomeworkDef>
      <FormLabel htmlFor='name' fontSize={18} fontWeight={600}>發佈作業</FormLabel>
      <Formik
          initialValues={{
          title: '',
          content: '',
          fraction: '',
          end_at: ''
        }}
          onSubmit={(values, actions) => {
          console.log(values)
          createdHW({
            variables: {
              title: values.title,
              work_content: values.content,
              fraction: values.fraction,
              // end_at: values.end_at,
              files: null
            }
          })
          //   setTimeout(() => {
          //     alert(JSON.stringify(values, null, 2));
          //     actions.setSubmitting(false);
          //   }, 1000);
        }}
        >
          {props => (
          <Form onSubmit={props.handleSubmit}>
            <Field name='title'>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.title && form.touched.title}>

                  <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <Box width='120px' as='span'>作業名稱:</Box> <Input {...field} id='name' placeholder='作業名稱' />
                  </Box>
                  <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Box mt='20px' />
            <Field name='content'>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <Box width='120px' as='span'>作業名稱:</Box> <Textarea {...field} placeholder='作業名稱' />
                  </Box>
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Box mt='20px' />
            <Field name='end_at'>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <Box width='120px' as='span'>截至時間:</Box> <Input {...field} placeholder='截至時間' />
                  </Box>
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Box mt='20px' />
            <Field name='fraction'>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <Box width='120px' as='span'>作業滿分:</Box> <Input {...field} placeholder='作業滿分' />
                  </Box>
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Text ml='2%' textAlign={['left', 'left']} mt='20px'>作業對象：全班同學</Text>

            <Button
              mt={4}
              variantColor='teal'
              isLoading={props.isSubmitting}
              type='submit'
            >
            Submit
            </Button>
          </Form>
        )}
        </Formik>
    </HomeworkDef>
  )
}
export default SbumitWork
