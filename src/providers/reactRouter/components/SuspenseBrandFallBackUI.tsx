import { Typography } from '@mui/material'
import { Suspense, type ReactNode } from 'react'

/**
 *
 * @param children - The children components to be wrapped by the Suspense fallback UI.
 * This component provides a fallback UI while the children components are being loaded.
 * It uses React's Suspense to handle loading states for lazy-loaded components.
 * The fallback UI can be customized as needed.
 * @returns
 */
const SuspenseBrandFallBackUI = ({ children }: { children: ReactNode }) => {
    return (
        <Suspense
            fallback={
                <Typography
                    variant="h3"
                    textAlign="center"
                    mt={4}
                >
                    ...
                </Typography>
            }
        >
            {children}
        </Suspense>
    )
}

export default SuspenseBrandFallBackUI
