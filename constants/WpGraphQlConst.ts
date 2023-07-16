export class WpGraphQlPostConst {
    static list = `query PostListQuery {
        posts {
            edges {
                node {
                    id
                    date
                    slug
                    excerpt
                    title
                    categories {
                        edges {
                            node {
                                name
                                slug
                            }
                        }
                    }
                    featuredImage {
                        node {
                            sourceUrl
                        }
                    }
                }
            }
        }
    }`
}