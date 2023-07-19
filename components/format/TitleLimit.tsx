import { bloglist, newsList } from "../../constants/const";

type Props = {
    type: string
    title: string
}

export default function TitleLimit({ title, type }: Props) {
    let titleLimit:number = 0;

    switch(true) {
        case  type == "blog" :
            titleLimit = bloglist.title_limit;
            break;
        case type == "news" :
            titleLimit = newsList.title_limit;
            break;
        case type == "news-cat" :
            titleLimit = newsList.category_limit;
            break;
    }

    if(title.length > titleLimit) {
        title = title.substring(0, titleLimit) + "...";
    }

    return (
        <span>{title}</span>
    )
}