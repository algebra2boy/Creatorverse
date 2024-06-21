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

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        ;
    };

    return (
        <div className="flex flex-col justify-center items-center pb-20">
            <p className="text-white">{JSON.stringify(content)}</p>
            <form onSubmit={submitHandler}>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white text-2xl">Name</span>
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
                        <span className="label-text text-white text-2xl">Image</span>
                    </div>
                    <div className="label -mt-2">
                        <span className="label-text text-white">Provide a link to an image of your creator. Be sure to include the http://</span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        name="image"
                        onChange={inputHandler}
                    />
                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white text-2xl">Description</span>
                    </div>
                    <div className="label -mt-2">
                        <span className="label-text text-white">Provide a description of the creator. Who are they? What makes them interesting?</span>
                    </div>
                    <input
                        type="text"
                        className="textarea textarea-bordered h-24"
                        name="description"
                        onChange={inputHandler}
                    />
                </label>

                <label className="w-full max-w-xs mt-10">
                    <div className="label">
                        <span className="label-text text-blue-500 text-sm">SOCIAL MEDIA LINKS</span>
                    </div>
                    <div className="label -mt-2">
                        <span className="label-text text-white text-xs">Provide at least one of the creator's social media links.</span>
                    </div>
                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white text-2xl">YouTube</span>
                    </div>
                    <div className="label -mt-2">
                        <span className="label-text text-white">The creator's YouTube handle (without the @)

                        </span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        name="youtube"
                        onChange={inputHandler}
                    />
                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white text-2xl">Twitter</span>
                    </div>
                    <div className="label -mt-2">
                        <span className="label-text text-white">The creator's Twitter handle (without the @)</span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        name="twitter"
                        onChange={inputHandler}
                    />
                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white text-2xl">Instagram</span>
                    </div>
                    <div className="label -mt-2">
                        <span className="label-text text-white">The creator's Instagram handle (without the @)</span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        name="instagram"
                        onChange={inputHandler}
                    />
                </label>

                <button className="btn btn-wide btn-info mt-10" type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default AddCreatorPage
