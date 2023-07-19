import Repository from "./Repository";
import { WpGraphQlPostConst } from "../constants/WpGraphQlConst";

class PostRepository {
    static getList() {
        return Repository(WpGraphQlPostConst.list).getWp()
    }

    static getAllSlug() {
        return Repository(WpGraphQlPostConst.allSlug).getWp()
    }

    static getOne({ id }: {
        id: string
    }) {
        return Repository(
            WpGraphQlPostConst.one,
            { 
                variables: {
                    id
                }
            }
        ).getWp()
    }
}

export default PostRepository