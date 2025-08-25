import { router } from '@/providers/reactRouter/components/Router'
import { RouterProvider } from 'react-router'

/**
 *
 * @returns - A React component that provides routing capabilities using React Router.
 * It uses the `RouterProvider` from React Router to enable navigation and routing in the application
 */
export const ReactRouterProvider = () => {
    return <RouterProvider router={router} />
}
