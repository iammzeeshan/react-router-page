
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import Layout from './Layout.jsx'
import HomePage from './components/HomePage/HomePage.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy.jsx'
import TermsConditions from './components/TermsConditions/TermsConditions.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
        {
          path: 'privacy',
          element: <PrivacyPolicy />,
        },
        {
          path: 'terms',
          element: <TermsConditions />,
        },
        {
          path: 'user/:userid',
          element: <User />,
        },
        {
          path: 'github',
          element: <Github />,
        },
      ],
    },
  ],
  {
    basename: '/react-router-page',
  }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

