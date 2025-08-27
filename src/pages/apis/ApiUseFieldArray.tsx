import FormBorderWithTitle from '@/containers/FormBorderWithTitle'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, TextField } from '@mui/material'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object().shape({
    friends: yup
        .array()
        .of(
            yup.object().shape({
                name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
                age: yup
                    .number()
                    .typeError('Age must be a number')
                    .required('Age is required')
                    .min(18, 'Age must be at least 18')
            })
        )
        .min(1, 'At least one friend is required') // <-- ensures not empty
        .required('Friends are required')
})

type FormValues = yup.InferType<typeof schema>

export default function ApiUseFieldArray() {
    const { control, handleSubmit } = useForm<FormValues>({
        resolver: yupResolver(schema),
        defaultValues: {
            friends: [{ name: 'Alice', age: 25 }]
        }
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'friends'
    })

    const onSubmit = (data: FormValues) => console.log(data)

    return (
        <FormBorderWithTitle title="Use Field Array">
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
                {fields.map((field, index) => (
                    <div
                        key={field.id}
                        style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
                    >
                        <Controller
                            name={`friends.${index}.name`}
                            control={control}
                            render={({ field, fieldState }) => (
                                <TextField
                                    {...field}
                                    label="Name"
                                    error={!!fieldState.error}
                                    helperText={fieldState.error?.message}
                                />
                            )}
                        />
                        <Controller
                            name={`friends.${index}.age`}
                            control={control}
                            render={({ field, fieldState }) => (
                                <TextField
                                    {...field}
                                    label="Age"
                                    type="number"
                                    error={!!fieldState.error}
                                    helperText={fieldState.error?.message}
                                />
                            )}
                        />
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => remove(index)}
                        >
                            Remove
                        </Button>
                    </div>
                ))}

                <Button
                    variant="outlined"
                    onClick={() => append({ name: '', age: 0 })}
                >
                    Add Friend
                </Button>

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
