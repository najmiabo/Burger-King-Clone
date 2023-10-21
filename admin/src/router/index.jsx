import { createBrowserRouter, redirect } from 'react-router-dom'
import Layout from '../components/Layout.jsx'
import LoginView from '../views/LoginView.jsx'
import HomeView from '../views/HomeView.jsx'
import CategoriesView from '../views/CategoriesView.jsx'
import RegisterFormView from '../views/RegisterFormView.jsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    loader: () => {
      if (!localStorage.access_token) {
        throw redirect("/login")
      }

      return null
    },
    children: [
      {
        path: '/',
        element: <HomeView />
      },
      {
        path: '/category',
        element: <CategoriesView />
      },
      {
        path: '/register',
        element: <RegisterFormView />
      }
    ]
  },
  {
    path: '/login',
    element: <LoginView />,
    loader: () => {
      if (localStorage.access_token) {
        throw redirect("/")
      }
      return null
    }
  }
])

export default router