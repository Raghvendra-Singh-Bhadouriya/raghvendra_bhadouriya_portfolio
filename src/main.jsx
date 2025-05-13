import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter } from "react-router-dom"
import { SidebarProvider } from './contextApi/SidebarContext.jsx'

createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <BrowserRouter>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </BrowserRouter>
  </ChakraProvider>,
)
