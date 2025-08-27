import FormBorderWithTitle from '@/containers/FormBorderWithTitle'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, FormControl, FormHelperText, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

type GenderEnum = 'female' | 'male'

const schema = yup.object({
    firstName: yup
        .string()
        .required('First name is required')
        .max(15, 'Max 15 characters')
        .matches(/^[A-Za-z]+$/i, 'Only letters allowed'),
    gender: yup.mixed<GenderEnum>().oneOf(['female', 'male']).required(),
    age: yup.number().min(18).max(99).required()
})

type IFormInput = yup.InferType<typeof schema>

const defaultValues: IFormInput = {
    firstName: 'React hook form',
    gender: 'female',
    age: 25
}

const RHFExample = () => {
    const {
        register, // uncontrolled inputs
        unregister, // remove a field
        handleSubmit, // submit handler
        watch, // watch specific values
        setValue,
        getValues, // read form values
        reset, // reset all fields
        resetField, // reset single field
        setError, // manually set error
        clearErrors, // clear errors
        setFocus, // focus an input
        trigger, // manually trigger validation
        control, // for Controller
        formState: { errors, isDirty, isValid }
    } = useForm<IFormInput>({
        defaultValues,
        resolver: yupResolver(schema),
        mode: 'onSubmit'
    })

    // 👉 watch example
    const watchFirstName = watch('firstName')
    const watchAll = watch()

    // 👉 subscribe example
    useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            console.log('subscribe ->', name, value, type)
        })
        return () => subscription.unsubscribe()
    }, [watch])

    // 👉 submit
    const onSubmit = (data: IFormInput) => console.log('submit data', data)

    return (
        <FormBorderWithTitle title="Use Form Hook">
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
                {/* register example */}
                <TextField
                    label="First Name (register)"
                    variant="outlined"
                    {...register('firstName')}
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                />

                {/* Controller example */}
                <Controller
                    name="gender"
                    control={control}
                    render={({ field, fieldState }) => (
                        <FormControl error={!!fieldState.error}>
                            <Select
                                {...field}
                                variant="outlined"
                            >
                                <MenuItem value="female">Female</MenuItem>
                                <MenuItem value="male">Male</MenuItem>
                            </Select>
                            <FormHelperText>{fieldState.error?.message}</FormHelperText>
                        </FormControl>
                    )}
                />

                {/* another register */}
                <TextField
                    type="number"
                    label="Age"
                    variant="outlined"
                    {...register('age')}
                    error={!!errors.age}
                    helperText={errors.age?.message}
                />

                {/* Buttons for different API actions */}
                <Button
                    type="submit"
                    variant="contained"
                >
                    Submit
                </Button>
                <Button
                    onClick={() => setValue('firstName', 'Name updated using setvalue')}
                    variant="outlined"
                >
                    Set Value Programatically
                </Button>
                <Button
                    onClick={() => reset()}
                    variant="outlined"
                >
                    Reset All
                </Button>
                <Button
                    onClick={() => resetField('firstName')}
                    variant="outlined"
                >
                    Reset First Name
                </Button>
                <Button
                    onClick={() =>
                        setError('firstName', {
                            type: 'manual',
                            message: 'Manually set error!'
                        })
                    }
                    variant="outlined"
                >
                    Set Error
                </Button>
                <Button
                    onClick={() => clearErrors('firstName')}
                    variant="outlined"
                >
                    Clear Error In First Name
                </Button>
                <Button
                    onClick={() => setFocus('firstName')}
                    variant="outlined"
                >
                    Focus First Name
                </Button>
                <Button
                    onClick={() => console.log('getValues ->', getValues())}
                    variant="outlined"
                >
                    Get Values
                </Button>
                <Button
                    onClick={async () => {
                        const valid = await trigger('firstName')
                        console.log('trigger validation result ->', valid)
                    }}
                    variant="outlined"
                >
                    Trigger Validation
                </Button>
                <Button
                    onClick={() => unregister('age')}
                    variant="outlined"
                >
                    Unregister Age
                </Button>

                {/* Showing watched values */}
                <Typography variant="body2">Watch FirstName: {watchFirstName}</Typography>
                <Typography variant="body2">Watch All: {JSON.stringify(watchAll)}</Typography>

                <Typography
                    variant="body2"
                    color="textSecondary"
                >
                    isDirty: {String(isDirty)}, isValid: {String(isValid)}
                </Typography>
            </form>
        </FormBorderWithTitle>
    )
}

export default RHFExample
