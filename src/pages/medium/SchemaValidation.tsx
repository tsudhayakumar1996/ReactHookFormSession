import FormBorderWithTitle from '@/containers/FormBorderWithTitle'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, MenuItem, Select, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

type GenderEnum = 'female' | 'male'

type IFormInput = yup.InferType<typeof schema>

const defaultValues: IFormInput = {
    firstName: 'React hook form',
    gender: 'female'
}

const schema = yup.object().shape({
    firstName: yup
        .string()
        .required('First name is required')
        .max(15, 'First name must be at most 15 characters')
        .matches(/^[A-Za-z]+$/i, 'First name must only contain letters'),
    gender: yup.mixed<GenderEnum>().oneOf(['female', 'male'], 'Gender is required').required('Gender is required')
})

const SchemaValidation = () => {
    // hook
    const { control, handleSubmit } = useForm<IFormInput>({
        defaultValues,
        mode: 'onSubmit',
        resolver: yupResolver(schema)
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

export default SchemaValidation
