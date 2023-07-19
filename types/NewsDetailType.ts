import TermsType from "./TermsType"

interface NewsDetailType {
    id: string
    title: string
    slug: string
    date: string
    content: string
    terms: TermsType
}

export default NewsDetailType