import Layout from '@/providers/reactRouter/components/Layout'
import { PATH_NAMES } from '@/providers/reactRouter/const/pathNames'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'
// pages
const BasicForm = lazy(() => import('@/pages/basic/BasicForm'))
const RegisterFields = lazy(() => import('@/pages/basic/RegisterFields'))
const ValidatingFields = lazy(() => import('@/pages/basic/ValidatingFields'))
const ErrorBoundary = lazy(() => import('@/providers/reactRouter/components/ErrorBoundary'))
const IntegrationWithUILibraries = lazy(() => import('@/pages/medium/IntegrationWithUILibraries'))
const SchemaValidation = lazy(() => import('@/pages/medium/SchemaValidation'))
const UseFormApi = lazy(() => import('@/pages/apis/ApiUseForm'))
const ApiUseFormContext = lazy(() => import('@/pages/apis/ApiUseFormContext'))
const ApiUseFieldArray = lazy(() => import('@/pages/apis/ApiUseFieldArray'))

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
            },
            {
                path: PATH_NAMES.VALIDATION,
                element: <ValidatingFields />
            },
            {
                path: PATH_NAMES.INTEGRATION_WITH_UI_LIBRARIES,
                element: <IntegrationWithUILibraries />
            },
            {
                path: PATH_NAMES.SCHEMA_VALIDATION,
                element: <SchemaValidation />
            },
            {
                path: PATH_NAMES.USE_FORM_API,
                element: <UseFormApi />
            },
            {
                path: PATH_NAMES.USE_FORM_CONTEXT,
                element: <ApiUseFormContext />
            },
            {
                path: PATH_NAMES.USE_FIELD_ARRAY,
                element: <ApiUseFieldArray />
            }
        ]
    }
])
