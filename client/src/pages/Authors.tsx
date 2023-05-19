import { useEffect, useState } from "react"
import { getAuthors } from "../sanityHooks/authorHooks"

function AuthorsPage() {
    const [data, setData] = useState([])

    const fetchData = async () => {
        const res = await getAuthors()
        setData(res)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <h1>List authors</h1>
            {data.map((i: any) => (
                <div>{i.name}</div>
            ))}
        </div>
    )
}

export default AuthorsPage
