import FeaturedImageType from "./FeaturedImageType"
import CategoryType from "./CategoryType"

interface PostDetailType {
    id: string
    title: string
    slug: string
    date: string
    content: string
    featuredImage: FeaturedImageType
    category: CategoryType
}

export default PostDetailType