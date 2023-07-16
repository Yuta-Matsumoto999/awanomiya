import useSWR from "swr";
import { WpGraphQlPostConst } from "@/constants/WPGraphQLConst";
import PostType from "@/types/PostType";
import PostService from "@/services/PostService";
import { type } from "os";

const usePostListSwr = (staticPostList: PostType[]) => {
    const { data: postList} = useSWR(
        WpGraphQlPostConst.list, // query
        PostService.getList, // get data function
        { fallbackData: staticPostList } // initial data
    )

    return postList
}

export default usePostListSwr;