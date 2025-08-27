import SuspenseBrandFallBackUI from '@/providers/reactRouter/components/SuspenseBrandFallBackUI'
import { PATH_NAMES } from '@/providers/reactRouter/const/pathNames'
import { Chip, Container, Grid } from '@mui/material'
import { Outlet, useLocation, useNavigate } from 'react-router'

const chipLists = [
    {
        label: 'Basic Form',
        route: PATH_NAMES.HOME
    },
    {
        label: 'Register Fields',
        route: PATH_NAMES.REGISTER_FIELDS
    },
    {
        label: 'Validation Of Fields',
        route: PATH_NAMES.VALIDATION
    },
    {
        label: 'Integration With UI Libraries',
        route: PATH_NAMES.INTEGRATION_WITH_UI_LIBRARIES
    },
    {
        label: 'Schema Validation',
        route: PATH_NAMES.SCHEMA_VALIDATION
    },
    {
        label: 'Use Form API',
        route: PATH_NAMES.USE_FORM_API
    },
    {
        label: 'Use Form Context',
        route: PATH_NAMES.USE_FORM_CONTEXT
    },
    {
        label: 'Use Field Array',
        route: PATH_NAMES.USE_FIELD_ARRAY
    }
]

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
                <Grid
                    container
                    spacing={2}
                >
                    <Grid size={2}>
                        {chipLists.map(({ label, route }) => (
                            <ChipUI
                                key={route}
                                label={label}
                                route={route}
                            />
                        ))}
                    </Grid>
                    <Grid size={10}>
                        <Outlet />
                    </Grid>
                </Grid>
            </SuspenseBrandFallBackUI>
        </Container>
    )
}

export default Layout

type ChipUIProps = {
    label: string
    route: string
}

const ChipUI = ({ label, route }: ChipUIProps) => {
    // hook
    const navigate = useNavigate()
    const { pathname } = useLocation()
    return (
        <Chip
            label={label}
            onClick={() => navigate(route)}
            sx={{ mt: 2 }}
            variant={pathname === route ? 'filled' : 'outlined'}
        />
    )
}
