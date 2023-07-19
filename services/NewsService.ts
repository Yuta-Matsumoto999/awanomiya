import RepositoryFactory from "../repositories/RepositoryFactory";
import NewsType from "../types/PostType";

class NewsService {
    static async getList(): Promise<NewsType[]> {
        try {
            const res = await RepositoryFactory.news.getList();
            return res.data.data.newses.edges.map((data: any) => {
                const news: NewsType = {
                    id: data.node.id,
                    title: data.node.title,
                    slug: data.node.slug,
                    date: data.node.date,
                    excerpt: data.node.excerpt,
                    featuredImage: {
                        url: data.node.featuredImage.node.sourceUrl
                    },
                    category: {
                        slug: data.node.categories.edges[0].node.slug,
                        name: data.node.categories.edges[0].node.name
                    }
                }

                return news
            })
        } catch (err) {
            return []
        }
    }
} 

export default NewsService