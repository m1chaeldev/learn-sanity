import { useEffect, useState } from "react"
import { getPosts } from "../sanityHooks/postHooks"

function PostsPage() {
    const [data, setData] = useState([])

    const fetchData = async () => {
        const res = await getPosts()
        setData(res)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <h1>List posts</h1>
            {data.map((i: any) => (
                <div>{i.title}</div>
            ))}
        </div>
    )
}

export default PostsPage
