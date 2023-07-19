import FeaturedImageType from "./FeaturedImageType"
import CategoryType from "./CategoryType"

interface NewsType {
    id: string
    title: string
    slug: string
    date: string
    featuredImage: FeaturedImageType
    category: CategoryType
}

export default NewsType