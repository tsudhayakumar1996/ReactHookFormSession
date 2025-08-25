import { VerticalCenterAlignContainer } from '@/containers/VerticalCenterAlignContainer'
import { Container, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useRouteError } from 'react-router'

const ErrorBoundary = () => {
    // hook
    const error = useRouteError()

    // const
    const isErrorFromErrorInstance = error instanceof Error

    // state
    const [errMsg, setErrMsg] = useState('')

    // effect
    useEffect(() => {
        if (isErrorFromErrorInstance) {
            const err = error?.message
            setErrMsg(err ?? "An error occurred")
        }
    }, [])

    return (
        <Container
            disableGutters
            sx={{ height: '100vh' }}
        >
            <VerticalCenterAlignContainer>
                <Typography
                    variant='h1'
                >{errMsg}</Typography>
            </VerticalCenterAlignContainer>
        </Container>
    )
}

export default ErrorBoundary
