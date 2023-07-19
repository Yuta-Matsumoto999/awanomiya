import Repository from "./Repository";
import { WpGraphQlNewsConst } from "../constants/WpGraphQlConst";

class NewsRepository {
    static getList() {
        return Repository(WpGraphQlNewsConst.list).getWp()
    }

    static getOne({ id }:{
        id: string
    }) {
        return Repository(
            WpGraphQlNewsConst.one,
            {
                variables: {
                    id
                }
            }
        ).getWp()
    }

    static getAllSlug() {
        return Repository(WpGraphQlNewsConst.allSlug).getWp()
    }
}

export default NewsRepository