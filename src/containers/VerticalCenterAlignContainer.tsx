import { Box } from '@mui/material'
import type { ReactNode } from 'react'

/**
 *
 * @param children - The children components to be wrapped by the vertical center align container.
 * This component is designed to center its children vertically within the container.
 * It uses Material-UI's Box component for layout and styling.
 * The vertical alignment is achieved through CSS flexbox properties.
 * It is useful for creating layouts where content needs to be centered vertically.
 * @returns
 */
export const VerticalCenterAlignContainer = ({ children }: { children: ReactNode }) => {
    return (
        <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            {children}
        </Box>
    )
}
