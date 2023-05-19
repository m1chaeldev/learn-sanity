import sanityClient from "../sanity-client"

export async function getPosts() {
    const posts = await sanityClient.fetch('*[_type == "post"]')
    return posts
}

// export async function createPost(post: Post) {
//     const result = sanityClient.create(post)
//     return result
// }

// export async function updateDocumentTitle(_id, title) {
//     const result = sanityClient.patch(_id).set({ title })
//     return result
// }
