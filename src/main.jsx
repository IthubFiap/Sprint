import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Sobre from './routes/Sobre.jsx'
import Pilotos from './routes/Pilotos.jsx'
import Login from './routes/Login.jsx'
import GlobalStyle from './css/GlobalStyle.jsx'

const router = createBrowserRouter([
  {
    path:'/', element:<App/>,
    errorElement:<Error/>,

    children:[
      {path:'/',element:<Home/>},
      {path:'/sobre',element:<Sobre/>},
      {path:'/pilotos',element:<Pilotos/>},
      {path:'/login',element:<Login/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router} />
  </StrictMode>,
)
