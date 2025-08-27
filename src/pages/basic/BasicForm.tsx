import FormBorderWithTitle from '@/containers/FormBorderWithTitle'
import { useState } from 'react'

const BasicForm = () => {
    // const
    const [name, setname] = useState('React Hook Form')

    // handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <FormBorderWithTitle title="Basic Form">
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                }}
            >
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </FormBorderWithTitle>
    )
}

export default BasicForm
