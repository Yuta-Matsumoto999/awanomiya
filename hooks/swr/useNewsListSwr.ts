import useSWR from "swr";
import { WpGraphQlNewsConst } from "../../constants/WpGraphQlConst";
import NewsType from "../../types/NewsType";
import NewsService from "../../services/NewsService";

const useNewsListSwr = (staticNewses: NewsType[]) => {
    const { data:newsList } = useSWR(
        WpGraphQlNewsConst.list,
        NewsService.getList,
        { fallbackData: staticNewses }
    )

    return newsList;
}

export default useNewsListSwr