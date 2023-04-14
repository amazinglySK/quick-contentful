const getPosts = async (client) => {
    const res = await client.getEntries();
    return res.items;
}

const getPostById = async (client, id) => {
    const res = await client.getEntry(id)
    return res
}

const deconstructPost = (fields, post) => {
    let values = []
    for (const f of fields){
        values.push(post.fields[f])
    }
    return values
}

const getHtmlContent = (md) => {
    let parsed = marked.parse(md)
    return parsed
}
