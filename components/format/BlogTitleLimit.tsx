import PostType from "../../types/PostType";
import { bloglist } from "../../constants/const";

type Props = {
    blog: PostType
}

export default function BlogTitleLimit({ blog }: Props) {
    const titleLimit = bloglist.title_limit;
    let blogTitle: string = blog.title;

    if(blogTitle.length > titleLimit) {
        blogTitle = blogTitle.substring(0, titleLimit) + "...";
    }
    return (
        <h1 className="text-lg font-bold mt-3 mb-2">{blogTitle}</h1>
    )
}