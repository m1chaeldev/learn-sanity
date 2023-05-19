import { useEffect, useState } from "react"
import { getCategories } from "../sanityHooks/categoryHooks"

function CategoriesPage() {
    const [data, setData] = useState([])

    const fetchData = async () => {
        const res = await getCategories()
        setData(res)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <h1>List categories</h1>
            {data.map((i: any) => (
                <div>{i.title}</div>
            ))}
        </div>
    )
}

export default CategoriesPage
