import { createBrowserRouter } from 'react-router-dom'
import HomeView from '../views/HomeView.jsx'
import ItemDetailView from '../views/ItemDetailView.jsx'
import Layout from '../components/Layout.jsx'
import ItemByCategoryView from '../views/ItemByCategoryView.jsx'

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomeView />
            },
            {
                path: '/item/:id',
                element: <ItemDetailView />
            },
            {
                path: '/category-item',
                element: <ItemByCategoryView />
            }
        ]
    }
])

export default router