import { useState } from 'react'
import { supabase } from '../clients'
import { Content } from '../types/Content'
import { useNavigate } from 'react-router-dom'

const AddCreatorPage = () => {

    const navigate = useNavigate()

    const [content, setContent] = useState<Omit<Content, "id">>({
        name: '',
        image: '',
        description: '',
        youtube: '',
        twitter: '',
        instagram: '',
    })

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setContent({
            ...content,
            [e.target.name]: e.target.value,
        })
    }

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { error } = await supabase
            .from('creators')
            .insert({
                name: content.name,
                image: content.image,
                description: content.description,
                youtube: content.youtube,
                twitter: content.twitter,
                instagram: content.instagram,
            })
            .select()
        
        if (error) {
            console.error(error)
            return
        }
        navigate('/')
    }

    return (
        <div className="flex flex-col justify-center items-center pb-20">
            <form onSubmit={submitHandler}>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white text-2xl">
                            Name
                        </span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered"
                        name="name"
                        onChange={inputHandler}
                    />
                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white text-2xl">
                            Image
                        </span>
                    </div>
                    <div className="label -mt-2">
                        <span className="label-text text-white">
                            Provide a link to an image of your creator. Be sure
                            to include the http://
                        </span>
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
                        <span className="label-text text-white text-2xl">
                            Description
                        </span>
                    </div>
                    <div className="label -mt-2">
                        <span className="label-text text-white">
                            Provide a description of the creator. Who are they?
                            What makes them interesting?
                        </span>
                    </div>
                    <textarea
                        className="textarea textarea-bordered h-24"
                        name="description"
                        onChange={inputHandler}
                    />
                </label>

                <label className="w-full max-w-xs mt-10">
                    <div className="label">
                        <span className="label-text text-blue-500 text-sm">
                            SOCIAL MEDIA LINKS
                        </span>
                    </div>
                    <div className="label -mt-2">
                        <span className="label-text text-white text-xs">
                            Provide at least one of the creator's social media
                            links.
                        </span>
                    </div>
                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <div className="flex items-center gap-2">
                            <i className="fa fa-youtube text-white"></i>
                            <span className="label-text text-white text-2xl">
                                YouTube
                            </span>
                        </div>
                    </div>
                    <div className="label -mt-2">
                        <span className="label-text text-white">
                            The creator's YouTube handle (without the @)
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
                        <div className='flex items-center gap-2'>
                            <i className="fa fa-twitter text-white"></i>
                            <span className="label-text text-white text-2xl">
                                Twitter
                            </span>
                        </div>
                    </div>
                    <div className="label -mt-2">
                        <span className="label-text text-white">
                            The creator's Twitter handle (without the @)
                        </span>
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
                        <div className="flex items-center gap-2">
                            <i className="fa fa-instagram text-white"></i>
                            <span className="label-text text-white text-2xl">
                                Instagram
                            </span>
                        </div>
                    </div>
                    <div className="label -mt-2">
                        <span className="label-text text-white">
                            The creator's Instagram handle (without the @)
                        </span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        name="instagram"
                        onChange={inputHandler}
                    />
                </label>

                <button
                    className="btn btn-info mt-10 w-full max-w-xs"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddCreatorPage
