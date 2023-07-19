export class WpGraphQlPostConst {
    static list = `query PostListQuery {
        posts(first: 1000) {
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

    static one = `query PostOneQuery($id: ID!) {
        post(id: $id, idType: SLUG) {
            categories {
                edges {
                    node {
                        name
                        slug
                    }
                }
            }
            date
            content
            featuredImage {
                node {
                    sourceUrl
                }
            }
            id
            slug
            title
        }
    }`

    static allSlug = `query PostListQuery {
        posts(first: 10000) {
            edges {
                node {
                    slug
                }
            }
        }
    }`
}

export class WpGraphQlNewsConst {
    static list = `query NewsQuery {
        newses {
            edges {
                node {
                    id
                    slug
                    title
                    content
                    date
                    featuredImage {
                        node {
                        uri
                        }
                    }
                    terms {
                        edges {
                            node {
                                name
                                slug
                            }
                        }
                    }
                }
            }
        }
    }`
}