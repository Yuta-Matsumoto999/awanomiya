import { NextPage } from "next";
import Layout from "../../components/layout/layout";
import NewsService from "../../services/NewsService";
import NewsDetailType from "../../types/NewsDetailType";
import useNewsDetailSwr from "../../hooks/swr/useNewsdetailSwr";
import { Spinner, Stack } from '@chakra-ui/react'

const NewsDetail:NextPage<{
    slug: string
    staticNews: NewsDetailType
}> = ({ staticNews, slug }) => {
    const news = useNewsDetailSwr({ id: slug, staticNews })

    if(!news) {
        return (
            <Layout title="News">
                <Stack direction='row' spacing={4}>
                    <Spinner size='xl' />
                </Stack>
                <p className="pt-3">Loading...</p>
            </Layout>
        )
    }

    return (
        <Layout title="News">
            <p className="text-bold text-2xl">{news!.title}</p>
            <div className="my-5">
                <span className="py-1 px-3 rounded-md border text-xs bg-blue-100 border-blue-100">{news!.terms.name}</span>
            </div>
            <div dangerouslySetInnerHTML={{__html: news!.content}} className="pb-10"></div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await NewsService.getAllSlug();
    
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
    const staticNews = await NewsService.getOne({ id: params.slug })
    const slug = params.slug;

    if(!staticNews){
        return { notFound: true }
    }

    return {
        props: {
            slug,
            staticNews
        }
    }
}

export default NewsDetail