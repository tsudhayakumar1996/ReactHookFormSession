import FormBorderWithTitle from '@/containers/FormBorderWithTitle'
import { Chip, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'

type GenderEnum = 'female' | 'male'

type IFormInput = {
    firstName: string
    gender: GenderEnum
    age: number
}

const defaultValues: IFormInput = {
    firstName: 'React hook form',
    gender: 'female',
    age: 25
}

const ValidatingFields = () => {
    // hook
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInput>({
        defaultValues,
        mode: 'onSubmit' // onBlur, onChange, onTouched, all
    })

    const errorsObj = Object.keys(errors) as Array<keyof IFormInput>

    // handlers
    const onSubmit = (data: IFormInput) => console.log(data)

    return (
        <FormBorderWithTitle title="Validating Fields In Form">
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                }}
            >
                <input
                    {...register('firstName', {
                        required: 'First name is required',
                        maxLength: {
                            value: 15,
                            message: 'First name must be at most 15 characters'
                        },
                        pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: 'First name must only contain letters'
                        }
                    })}
                />
                <input
                    type="number"
                    {...register('age', {
                        min: { value: 18, message: 'Age must be at least 18' },
                        max: { value: 30, message: 'Age must be at most 30' }
                    })}
                />
                <select {...register('gender')}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>
                <button type="submit">Submit</button>
            </form>
            <Typography
                variant="h6"
                sx={{ mt: 2 }}
            >
                Errors in form
            </Typography>
            {errorsObj.length === 0 && (
                <Typography
                    variant="body2"
                    sx={{ mt: 2, textAlign: 'center' }}
                >
                    No errors found
                </Typography>
            )}
            {errorsObj.map((key) => (
                <Chip
                    variant="outlined"
                    key={key}
                    label={errors[key]?.message}
                    sx={{ mt: 1, mr: 1 }}
                />
            ))}
        </FormBorderWithTitle>
    )
}

export default ValidatingFields
