import { NextPage } from "next";
import Layout from "../../components/layout/layout";
import NewsService from "../../services/NewsService";
import NewsType from "../../types/NewsType";
import DateFormat from "../../components/format/DateFormat";
import TitleLimit from "../../components/format/TitleLimit";
import Link from "next/link";

const News: NextPage<{
    newses: NewsType[]
}> = ({ newses }) => {
    return (
        <Layout title="News">
            <p className="text-3xl font-bold mt-14 mb-2">NEWS</p>
            <div className="px-2 sm:px-10 lg:px-16 w-full py-12">
                {newses.map((news, index) => {
                    return (
                        <Link href={`news/${news.slug}`} className={index == newses.length - 1 ? "block md:flex border-t border-b py-10 px-5 lg:px-20" : "block md:flex border-t py-10 px-5 lg:px-20"} key={news.id}>
                            <div className="flex w-[100%] md:w-[40%] lg:w-[30%]">
                                <div className="w-[50%]">
                                    <DateFormat date={news.date} />
                                </div>
                                <div className="w-[50%]">
                                    <TitleLimit type="news-cat" title={news.terms.name} />
                                </div>
                            </div>
                            <div className="w-[100%] md:w-[60%] lg:w-[70%] mt-2 md:mt-0 font-bold">
                                <TitleLimit type="news" title={news.title} />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const newses = await NewsService.getList();

    return {
        props: {
            newses
        },
        revalidate: 2
    }
}

export default News