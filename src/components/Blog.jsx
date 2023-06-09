import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const Blog = () => {
  const { setLoading, loading } = useContext(AuthContext)
  const downloadPDF = () => {
    const capture = document.querySelector('.actual-receipt');
    setLoading(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png');

      const pdf = new jsPDF({
        orientation: 'landscape',
      });
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 1, 1, pdfWidth, pdfHeight);
      setLoading(false);
      pdf.save('qna-interview.pdf');
    })
  }
  return (
    <Box my='120px'>
      <Flex mb='30px' flexDir={{base: 'column', md: 'row'}} alignItems='center' gap='30px' px={{ base: '20px', md: '100px', lg: '165px' }} w='80%'>
        <Heading>Download These Q&A as PDF ➤</Heading>

        <Flex justifyContent='center' alignItems='center' className="receipt-actions-div">
       
            <Button
              className="receipt-modal-download-button"
              onClick={downloadPDF}
              disabled={!(loading === false)}
            >
              {loading ? (
                <span>Downloading</span>
              ) : (
                <span>Download</span>
              )}

            </Button>
          
        </Flex>
      </Flex>



      <Box px={{ base: '20px', md: '100px', lg: '165px' }} w='80%' className='actual-receipt' >

        <Box mb='30px' >
          <Heading color='rgba(255, 105, 40, 1)'>Question 1</Heading>
          <Heading>What is the differences between uncontrolled and controlled components?</Heading>
          <Text color='rgba(255, 105, 40, 1)' fontWeight={700}>Answer: <Text color='black' as='span'>Controlled components and uncontrolled components indicate to different ways of handling user input in forms. A controlled component is a form element whose value controlled by the component's state if a input field for example has props onChange and a hook, and is updated whenever the user types something new.
            <br />
            On the other hand an uncontrolled component is a form element whose value is controlled by the DOM when the form is submitted then the value is read from the DOM. If a form for example has props onSubmit with a submit button, and the value is read whenever the user clicks on the button.
          </Text></Text>
        </Box>
        <Box mb='30px'>
          <Heading color='rgba(255, 105, 40, 1)'>Question 2</Heading>
          <Heading>How to validate React props using PropTypes?</Heading>
          <Text color='rgba(255, 105, 40, 1)' fontWeight={700}>Answer: <Text color='black' as='span'>React PropTypes is a tool that allows a user to validate the props of the React components. PropTypes can be used to ensure that the data passed into a component is of the correct type, and that it has the expected shape. Using PropTypes can help catch errors early on inside the code, and can make it easier to debug the components. When a prop is passed that does not match the expected type or shape, a warning message will be printed in the console.




          </Text></Text>
        </Box>
        <Box mb='30px'>
          <Heading color='rgba(255, 105, 40, 1)'>Question 3</Heading>
          <Heading>What is the difference between nodejs and express js?</Heading>
          <Text color='rgba(255, 105, 40, 1)' fontWeight={700}>Answer: <Text color='black' as='span'>Node.js is a runtime environment for executing JavaScript code outside of a web browser. It provides an event-driven, non-blocking I/O (a programming technique that allows an application to perform I/O operations asynchronously without blocking the execution of other tasks) model that makes it well-suited for building beautiful and high-performance applications. Node.js allows developers to write server-side JavaScript code that can handle HTTP requests and responses, access databases, and perform other tasks.
            <br />
            On the other hand, Express.js is a web framework built on top of Node.js that simplifies the process of building web applications. Express.js provides a set of features and tools that make it easy to create server-side applications and APIs.</Text></Text>
        </Box>
        <Box mb='30px'>
          <Heading color='rgba(255, 105, 40, 1)'>Question 4</Heading>
          <Heading>What is a custom hook, and why will you create a custom hook?</Heading>
          <Text color='rgba(255, 105, 40, 1)' fontWeight={700}>Answer: <Text color='black' as='span'>A custom hook is a JavaScript function that uses one or more built-in React hooks and other JavaScript functions to setup common logic and behavior that can be reused across multiple components.
            <br />
            Custom hooks are created when a person want to reuse stateful logic across multiple components. For example, if a person have two or more components that share some similar stateful behavior or functionality, he can create a custom hook that encapsulates this logic, and then reuse it across the components.
          </Text></Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Blog;