import { createClient } from "@sanity/client"

const sanityClient = createClient({
    projectId: "8eyalshv",
    dataset: "production",
})

export default sanityClient
