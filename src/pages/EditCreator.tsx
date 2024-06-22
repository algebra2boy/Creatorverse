import { useEffect, useState } from 'react'
import { supabase } from '../clients'
import { Content } from '../types/Content'
import { useNavigate, useParams } from 'react-router-dom'

const EditreatorPage = () => {

    const params = useParams()
    const id = params.id

    const navigate = useNavigate()
    
    const [content, setContent] = useState<Content>({
        id: 0,
        name: '',
        image: '',
        description: '',
        youtube: '',
        twitter: '',
        instagram: '',
    })

    useEffect(() => {
        const fetchCreator = async () => {
            const { data, error } = await supabase.from('creators').select().eq('id', id);
            if (error) {
                console.error(error)
                return
            }
            if (data && data.length > 0) {
                setContent(data[0] as Content)
            }
        }
        fetchCreator();
    }, [id]);

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setContent({
            ...content,
            [e.target.name]: e.target.value,
        })
    }

    const updateHandler = async () => {
        const { error } = await supabase
            .from('creators')
            .update(content)
            .eq('id', content.id)

        if (error) {
            console.error(error)
            return
        }
        navigate('/')
    }

    const deleteHandler = async () => {
        await supabase
            .from('creators')
            .delete()
            .eq('id', content.id)
        navigate('/')
    }

    return (
        <div className="flex flex-col justify-center items-center pb-20">
            <div>
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
                        value={content.name}
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
                        value={content.image}
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
                        value={content.description}
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
                        value={content.youtube}
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
                        value={content.twitter}
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
                        value={content.instagram}
                    />
                </label>

                <button
                    className="btn btn-info mt-10 w-full max-w-xs"
                    onClick={updateHandler}
                >
                    Submit
                </button>
                <button
                    className="btn btn-warning mt-10 w-full max-w-xs"
                    onClick={deleteHandler}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default EditreatorPage
