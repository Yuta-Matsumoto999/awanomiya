import useSWR from "swr";
import { WpGraphQlPostConst } from "../../constants/WpGraphQlConst";
import PostDetailType from "../../types/PostDetailType";
import PostService from "../../services/PostService";

const usePostDetailSwr = ({id, staticBlog}: {
    id: string
    staticBlog: PostDetailType
}) => {
    const {data: post} = useSWR(
        [WpGraphQlPostConst.one, id],
        () => PostService.getOne({ id }),
        { fallbackData: staticBlog }
    )

    return post
}

export default usePostDetailSwr