import Layout from "../../components/layout/layout";
import PostService from "../../services/PostService";
import PostType from "../../types/PostType";
import usePostListSwr from "../../hooks/swr/usePostListSwr";
import { NextPage } from "next";
import BlogListImage from "../../components/image/blogListImage";

const Blog: NextPage<{
    staticBlogList: PostType[]
}>  = ({ staticBlogList }) => {

    const blogList = usePostListSwr(staticBlogList);
    return (
        <Layout title="Blog">
            <p className="text-3xl font-bold">BLOG</p>
            <div className="flex flex-row px-20 py-10">
                {blogList!.map((blog) => {
                    return (
                        <div className="border w-[30%] mx-3" key={blog.id}>
                            <BlogListImage
                                src={blog.featuredImage.url}
                                alt="no image"
                            />
                            <div className="p-5">
                                <span>{blog.category.name}</span>
                                <h1 className="font-bold">{blog.title}</h1>
                                <p className="">{blog.excerpt}</p>
                                <span>{blog.date}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}


export async function getStaticProps() {
    const staticBlogList = await PostService.getList();

    return {
        props: {
            staticBlogList
        },
        revalidate: 10
    }
}

export default Blog