import FormBorderWithTitle from '@/containers/FormBorderWithTitle'
import { useForm } from 'react-hook-form'

type GenderEnum = 'female' | 'male'

type IFormInput = {
    firstName: string
    gender: GenderEnum
}

const defaultValues: IFormInput = {
    firstName: 'React hook form',
    gender: 'female'
}

const RegisterFields = () => {
    // hook
    const { register, handleSubmit } = useForm<IFormInput>({
        defaultValues
    })

    // handlers
    const onSubmit = (data: IFormInput) => console.log(data)

    return (
        <FormBorderWithTitle title="Register Fields In Form">
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                }}
            >
                <input {...register('firstName')} />
                <select {...register('gender')}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </FormBorderWithTitle>
    )
}

export default RegisterFields
