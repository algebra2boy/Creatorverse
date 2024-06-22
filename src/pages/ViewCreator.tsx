import { useParams } from "react-router-dom";
import { Content } from "../types/Content";
import { supabase } from "../clients";
import { useEffect, useState } from "react";

const ViewCreatorPage = () => {

    const params = useParams();
    const id = params.id;

    const [creator, setCreator] = useState<Content | null>(null);

    useEffect(() => {
        const fetchCreator = async () => {
            const { data, error } = await supabase.from('creators').select().eq('id', id);
            if (error) {
                console.error(error)
                return
            }
            if (data && data.length > 0) {
                setCreator(data[0] as Content)
            }
        }
        fetchCreator();
    }, [id])

    return (
        <>
            <div className="flex justify-center items-center p-24">
                <div className="card card-side w-full bg-slate-900 shadow-xl">
                    {creator?.image &&
                        <figure className="w-1/3">
                            <img src={creator.image} alt={creator.image} className="rounded-xl" />
                        </figure>
                    }
                    <div className="card-body w-2/3">
                        <h2 className="card-title text-4xl font-bold text-blue-400">{creator?.name ?? ""}</h2>
                        <p className="text-white">
                            {creator?.description ?? ""}
                        </p>
                        {creator?.youtube &&
                            <a href={`https://www.youtube.com/@${creator.youtube}`} className="btn w-1/2" >
                                <i className="fa fa-youtube"></i> {creator.youtube}
                            </a>
                        }
                        {creator?.twitter &&
                            <a href={`https://x.com/@${creator.twitter}`} className="btn w-1/2">
                                <i className="fa fa-twitter"></i> {creator.twitter}
                            </a>
                        }
                        {creator?.instagram &&
                            <a href={`https://www.instagram.com/${creator.instagram}`} className="btn w-1/2">
                                <i className="fa fa-instagram"></i> {creator.instagram}
                            </a>
                        }
                    </div>
                </div>

            </div>
            <div className="flex justify-center gap-5 pb-24">
                <button className="btn btn-info btn-wide">EDIT</button>
                <button className="btn btn-warning btn-wide">DELETE</button>
            </div>
        </>
    )
}

export default ViewCreatorPage
