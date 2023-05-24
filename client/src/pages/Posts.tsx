import { useEffect, useState } from "react"
import { getPosts } from "../sanityHooks/postHooks"
import { PortableText } from "@portabletext/react"

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
                <div
                    style={{
                        border: "solid 1px #000",
                        marginTop: 20,
                    }}
                    key={i._id}
                >
                    <h3>Post: {i.title}</h3>
                    <br />
                    <PortableText value={i.body} />
                </div>
            ))}
        </div>
    )
}

export default PostsPage
