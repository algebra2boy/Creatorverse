import { useState } from 'react'

export interface Content {
    name: string
    image: string
    description: string
    youtube: string
    twitter: string
    instagram: string
}

const AddCreatorPage = () => {
    const [content, setContent] = useState<Content>({
        name: '',
        image: '',
        description: '',
        youtube: '',
        twitter: '',
        instagram: '',
    })

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent({
            ...content,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <p className="text-white">{JSON.stringify(content)}</p>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text text-white">Name</span>
                </div>
                <input
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                    name="name"
                    onChange={inputHandler}
                />
            </label>

            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text text-white">Name</span>
                </div>
                <div className="label -mt-2">
                    <span className="label-text text-white">Name</span>
                </div>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                />
            </label>
        </div>
    )
}

export default AddCreatorPage
