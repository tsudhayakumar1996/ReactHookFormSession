import FormBorderWithTitle from '@/containers/FormBorderWithTitle'
import { Button, MenuItem, Select, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'

type GenderEnum = 'female' | 'male'

type IFormInput = {
    firstName: string
    gender: GenderEnum
}

const defaultValues: IFormInput = {
    firstName: 'React hook form',
    gender: 'female'
}

const IntegrationWithUILibraries = () => {
    // hook
    const { control, handleSubmit } = useForm<IFormInput>({
        defaultValues,
        mode: 'onSubmit'
    })

    // handlers
    const onSubmit = (data: IFormInput) => console.log(data)

    return (
        <FormBorderWithTitle title="Integration With UI Libraries">
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                }}
            >
                <Controller
                    name="firstName"
                    control={control}
                    rules={{
                        required: 'First name is required',
                        maxLength: {
                            value: 15,
                            message: 'First name must be at most 15 characters'
                        },
                        pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: 'First name must only contain letters'
                        }
                    }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            variant="outlined"
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                        />
                    )}
                />
                <Controller
                    name="gender"
                    control={control}
                    rules={{ required: 'Gender is required' }}
                    render={({ field, fieldState }) => (
                        <Select
                            {...field}
                            variant="outlined"
                            error={!!fieldState.error}
                        >
                            <MenuItem value={'female'}>Female</MenuItem>
                            <MenuItem value={'male'}>Male</MenuItem>
                        </Select>
                    )}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Submit
                </Button>
            </form>
        </FormBorderWithTitle>
    )
}

export default IntegrationWithUILibraries
