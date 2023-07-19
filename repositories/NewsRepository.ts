import Repository from "./Repository";
import { WpGraphQlNewsConst } from "../constants/WpGraphQlConst";

class NewsRepository {
    static getList() {
        return Repository(WpGraphQlNewsConst.list).getWp();
    }
}

export default NewsRepository