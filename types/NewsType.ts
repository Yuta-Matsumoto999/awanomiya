import TermsType from "./TermsType"

interface NewsType {
    id: string
    title: string
    slug: string
    date: string
    terms: TermsType
}

export default NewsType