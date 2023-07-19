import useSWR from "swr";
import NewsService from "../../services/NewsService";
import NewsDetailType from "../../types/NewsDetailType";
import { WpGraphQlNewsConst } from "../../constants/WpGraphQlConst";

const useNewsDetailSwr = ({ id, staticNews }: {
    id: string
    staticNews: NewsDetailType
}) => {
    const {data: news} = useSWR(
        [WpGraphQlNewsConst.one, id],
        () => NewsService.getOne({ id }),
        { fallbackData: staticNews }
    )

    return news
}

export default useNewsDetailSwr