import Layout from '@/providers/reactRouter/components/Layout'
import { PATH_NAMES } from '@/providers/reactRouter/const/pathNames'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'
// pages
const BasicForm = lazy(() => import('@/pages/basic/BasicForm'))
const RegisterFields = lazy(() => import('@/pages/basic/RegisterFields'))
const ErrorBoundary = lazy(() => import('@/providers/reactRouter/components/ErrorBoundary'))

export const router = createBrowserRouter([
    {
        path: PATH_NAMES.HOME,
        element: <Layout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <BasicForm />
            },
            {
                path: PATH_NAMES.REGISTER_FIELDS,
                element: <RegisterFields />
            }
        ]
    }
])
