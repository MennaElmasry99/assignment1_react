
import './App.css'
import {createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import MainLayout from './Layouts/MainLayout'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'
import Landing from './Components/Landing/Landing'
function App() {
const router = createBrowserRouter([{
  path:'', element:<MainLayout/>, children:[
    {index:true, element:<Landing/>},
    {path:'about', element:<About/>},
    {path:'portfolio', element: <Portfolio/>},
    {path:'contact', element:<Contact/>},
    {path:'*', element:<NotFound/>}
  ]
}])
  return (
    <>

    <RouterProvider router={router}/>
    </>
  )
}

export default App
