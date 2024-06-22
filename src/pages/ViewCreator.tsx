const ViewCreatorPage = () => {
    return (
        <>
            <div className="flex justify-center items-center p-24">
                <div className="card card-side w-full bg-slate-900 shadow-xl">
                    <figure className="w-1/3">
                        <img src="https://via.placeholder.com/150" alt="Mr beast" className="rounded-xl" />
                    </figure>
                    <div className="card-body w-2/3">
                        <h2 className="card-title text-4xl font-bold text-blue-400">MR BEAST</h2>
                        <p className="text-white">
                            James Stephen "Jimmy" Donaldson (born May 7, 1998), better known by his online alias MrBeast,
                            is an American YouTuber, online personality, entrepreneur, and philanthropist. He is known for
                            his fast-paced and high-production videos, which feature elaborate challenges and large giveaways.
                        </p>
                        <a href="https://www.youtube.com/@mrbeast" className="btn w-1/2" >
                            <i className="fa fa-youtube"></i> YouTube
                        </a>
                        <a href="https://www.youtube.com/@mrbeast" className="btn w-1/2">
                            <i className="fa fa-youtube"></i> @mrbeast
                        </a>
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
