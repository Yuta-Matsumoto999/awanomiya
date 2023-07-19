import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'

type Props = {
    date: string
} 

export default function DateFormat({ date }: Props) {
    return (
        <span>{format(parseISO(date), 'yyyy.MM.dd', {locale:ja} )}</span>
    )
}