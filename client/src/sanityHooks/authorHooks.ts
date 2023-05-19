import sanityClient from "../sanity-client"

export async function getAuthors() {
    const res = await sanityClient.fetch('*[_type == "author"]')
    return res
}
