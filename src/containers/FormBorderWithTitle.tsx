import { Box, Typography } from '@mui/material'

type FormBorderWithTitleProps = {
    title: string
    children: React.ReactNode
}

const FormBorderWithTitle = ({ title, children }: FormBorderWithTitleProps) => {
    return (
        <Box pt={8}>
            <Box sx={{ border: '1px solid', borderRadius: '4px', p: 2, maxWidth: '400px', margin: '0 auto' }}>
                <Typography
                    variant="h4"
                    mb={2}
                >
                    {title}
                </Typography>
                {children}
            </Box>
        </Box>
    )
}

export default FormBorderWithTitle
