import SuspenseBrandFallBackUI from '@/providers/reactRouter/components/SuspenseBrandFallBackUI'
import { Container } from '@mui/material'
import { Outlet } from 'react-router'

/**
 *
 * @returns - A layout component that serves as a wrapper for the application's main content.
 * It uses the `Outlet` component from React Router to render child routes.
 * This allows for nested routing, where the layout can include common elements like headers, footers, or sidebars,
 * while the specific content is determined by the current route.
 */
const Layout = () => {
    return (
        <Container
            disableGutters
            sx={{ height: '100vh' }}
        >
            <SuspenseBrandFallBackUI>
                <Outlet />
            </SuspenseBrandFallBackUI>
        </Container>
    )
}

export default Layout
