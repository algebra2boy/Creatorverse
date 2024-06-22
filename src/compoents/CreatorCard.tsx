import { Link } from 'react-router-dom'
import { Content } from '../types/Content'

const CreatorCard = (creator: Content) => {
    return (
        <div
            className="card w-96 h-80 shadow-xl bg-slate-700"
            style={{
                backgroundImage: creator.image
                    ? `url(${creator.image})`
                    : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="card-body text-dark flex flex-col justify-center min-h-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="card-title text-xl font-bold text-white">
                        {creator.name ?? ''}
                    </h2>
                    <div className="flex space-x-4 mt-2">
                        <Link
                            to={`/${creator.id}`}
                        >
                            <i className="fa fa-info text-white"></i>
                        </Link>
                        <Link to={`/edit/${creator.id}`}>
                            <i className="fa fa-pencil text-white"></i>
                        </Link>
                    </div>
                </div>
                <div className="flex icon-section flex-row space-x-4 mt-2 mb-4">
                    {creator.youtube && (
                        <a href={`https://www.youtube.com/@${creator.youtube}`}>
                            <i className="fa fa-youtube text-white"></i>
                        </a>
                    )}

                    {creator.twitter && (
                        <a href={`https://x.com/@${creator.twitter}`}>
                            <i className="fa fa-twitter text-white"></i>
                        </a>
                    )}

                    {creator.instagram && (
                        <a
                            href={`https://www.instagram.com/${creator.instagram}`}
                        >
                            <i className="fa fa-instagram text-white"></i>
                        </a>
                    )}
                </div>

                <p className="text-white">{creator.description ?? ''}</p>
            </div>
        </div>
    )
}

export default CreatorCard
