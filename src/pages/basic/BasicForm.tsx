import { useState } from 'react'

const BasicForm = () => {
    // const
    const [name, setname] = useState('React Query')

    // handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // can call external apis here
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default BasicForm
