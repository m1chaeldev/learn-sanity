import sanityClient from "../sanity-client"
import getScheme from "../utils/common/getScheme"

export async function getPosts() {
    const posts = await sanityClient.fetch(getScheme("post"))
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
