import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import AuthProvider from './providers/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import toast, { Toaster } from 'react-hot-toast';
import "@fontsource/bitter/700.css"
import "@fontsource/poppins/500.css"
import theme from '../theme.font.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster/>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
