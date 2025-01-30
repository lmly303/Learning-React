import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router'
import Home from './components/Home/home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/ContactUs/ContactUs.jsx'
import Github, { githubInfo } from './components/Github/Github.jsx'
import Layout from './Layout.jsx'
import User from './components/User/User.jsx'


// <------- first type how to make routes! ------>
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Route />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"contactus",
//         element:<Contact />
//       },
//       {
//         path:"github",
//         element:<Github />
//       }
//     ]
//   }
// ])

// <------- Second type how to make routes! ------>
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contactus' element={<Contact />}/>
      <Route path='/user/:userid' element={<User />}/>
      <Route loader={githubInfo} path='/github' element={<Github />} />
    </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
