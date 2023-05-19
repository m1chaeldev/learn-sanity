import sanityClient from "../sanity-client"

export async function getCategories() {
    const res = await sanityClient.fetch('*[_type == "category"]')
    return res
}
