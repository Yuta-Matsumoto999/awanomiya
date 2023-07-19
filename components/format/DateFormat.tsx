import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'

type Props = {
    date: string
} 

export default function DateFormat({ date }: Props) {
    return (
        <p className='text-xs mt-3'>{format(parseISO(date), 'yyyy.MM.dd', {locale:ja} )}</p>
    )
}