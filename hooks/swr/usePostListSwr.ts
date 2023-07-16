import useSWR from "swr";
import { WpGraphQlPostConst } from "../../constants/WpGraphQlConst";
import PostType from "../../types/PostType";
import PostService from "../../services/PostService";

const usePostListSwr = (staticPostList: PostType[]) => {
    const { data: postList} = useSWR(
        WpGraphQlPostConst.list, // query
        PostService.getList, // get data function
        { fallbackData: staticPostList } // initial data
    )

    return postList
}

export default usePostListSwr;