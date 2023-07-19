import Layout from "../../components/layout/layout";
import PostService from "../../services/PostService";
import PostType from "../../types/PostType";
import usePostListSwr from "../../hooks/swr/usePostListSwr";
import { NextPage } from "next";
import ResponsiveImage from "../../components/image/responsiveImage";
import Link from "next/link";
import DateFormat from "../../components/format/DateFormat";
import TitleLimit from "../../components/format/TitleLimit";

const Blog: NextPage<{
    staticBlogList: PostType[]
}>  = ({ staticBlogList }) => {

    const blogList = usePostListSwr(staticBlogList);
    return (
        <Layout title="Blog">
            <p className="text-3xl font-bold mt-14 mb-2">BLOG</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-5 px-2 sm:px-10 lg:px-16 py-12 w-full">
                {blogList!.map((blog) => {
                    return (
                        <Link href={`blog/${blog.slug}`} className="border w-[100%]" key={blog.id}>
                            <div className="w-[100%] h-[320px] md:h-[350px] lg:h-[400px]">
                                <ResponsiveImage
                                    src={blog.featuredImage.url}
                                    alt="no image"
                                />
                            </div>
                            <div className="p-5">
                                <span className="border rounded-xl py-1 px-3">{blog.category.name}</span>
                                <div className="text-lg mt-3 font-bold">
                                    <TitleLimit type="blog" title={blog.title} />
                                </div>
                                <div className="mt-2 text-xs">
                                    <DateFormat date={blog.date} />
                                </div>
                            </div>
                        </Link>
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