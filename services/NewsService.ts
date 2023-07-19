import RepositoryFactory from "../repositories/RepositoryFactory";
import NewsDetailType from "../types/NewsDetailType";
import NewsType from "../types/NewsType";

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
                    terms: {
                        slug: data.node.terms.edges[0].node.slug,
                        name: data.node.terms.edges[0].node.name
                    }
                }

                return news
            })
        } catch (err) {
            return []
        }
    }

    static async getOne({id}:{
        id: string
    }): Promise<NewsDetailType | null> {
        try {
            const res = await RepositoryFactory.news.getOne({ id });
            const data = res.data.data.news
            const news: NewsDetailType = {
                id: data.id,
                title: data.title,
                slug: data.slug,
                date: data.date,
                content: data.content,
                terms: {
                    slug: data.terms.edges[0].node.slug,
                    name: data.terms.edges[0].node.name
                }
            }

            return news
        } catch (err) {
            return null
        }
    }

    static async getAllSlug(): Promise<{
        params: {
            slug: string
        }
    }[]> {
        try {
            const res = await RepositoryFactory.news.getAllSlug()
            return res.data.data.posts.edges.map((data: any) => {
                return { params: { slug: data.node.slug } }
            })
        } catch {
            return []
        }
    }
} 

export default NewsService