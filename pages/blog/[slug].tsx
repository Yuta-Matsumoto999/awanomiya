import Layout from "../../components/layout/layout";
import { NextPage } from "next";
import PostService from "../../services/PostService";
import PostDetailType from "../../types/PostDetailType";
import ResponsiveImage from "../../components/image/responsiveImage";
import usePostDetailSwr from "../../hooks/swr/usePostDetailSwr";
import { Spinner, Stack } from '@chakra-ui/react'

const BlogDetail: NextPage<{
    slug: string
    staticBlog: PostDetailType
}> = ({ staticBlog, slug }) => {
    const post = usePostDetailSwr({ id: slug, staticBlog });

    if(!post) {
        return (
            <Layout title="Blog">
                <Stack direction='row' spacing={4}>
                    <Spinner size='xl' />
                </Stack>
                <p className="pt-3">Loading...</p>
            </Layout>
        )
    }

    return (
        <Layout title="Blog">
            <div className="w-[90%] sm:w-[80%] lg:w-[60%] 2xl:w-[45%] h-[350px] sm:h-[500px] mt-10">
                <ResponsiveImage
                    src={post!.featuredImage.url}
                    alt="no image"
                />
            </div>
            <p className="text-2xl md:text-3xl font-bold my-10">{post!.title}</p>
            <div dangerouslySetInnerHTML={{__html: post!.content}} className="pb-10"></div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await PostService.getAllSlug();

    return {
        paths, 
        fallback: false
    }
}

export async function getStaticProps({ params }: {
    params: {
        slug: string
    }
}) {
    const staticBlog = await PostService.getOne({ id: params.slug} );
    const slug = params.slug;

    if(!staticBlog){
        return { notFound: true }
    }

    return {
        props: {
            slug,
            staticBlog
        }
    }
}

export default BlogDetail