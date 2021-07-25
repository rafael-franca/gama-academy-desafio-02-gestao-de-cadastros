import { ReactNode } from 'react'

import Content from './components/content'

type TTableBodyItemProps = {
    children: ReactNode
}

export default function Item({ children }: TTableBodyItemProps) {
    return (
        <tr className="divide-x">
            {children}
        </tr>
    )
}

Item.Content = Content