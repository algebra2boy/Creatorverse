import { useEffect, useState } from 'react'
import { CreatorCard } from '../compoents'
import { supabase } from '../clients'
import { Content } from '../types/Content'

const ShowCreatorPage = () => {
    const [creators, setCreators] = useState<Content[] | null>([])

    useEffect(() => {
        const fetchCreators = async () => {
            const { data, error } = await supabase.from('creators').select()

            if (error) {
                console.error(error)
                return
            }
            setCreators(data as Content[])
        }
        fetchCreators();
    }, [])

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {creators?.map((creator) => {
                    return <CreatorCard {...creator} key={creator.id} />
                })}
            </div>
        </div>
    )
}

export default ShowCreatorPage
