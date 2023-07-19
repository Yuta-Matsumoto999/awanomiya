import NewsRepository from "./NewsRepository";
import PostRepository from "./PostRepository";

const RepositoryFactory = {
    post: PostRepository,
    news: NewsRepository
}

export default RepositoryFactory