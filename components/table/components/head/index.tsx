import { ReactNode } from 'react'

import Column from './components/column'

type TTableHeadProps = {
    columns: string[] | ReactNode[]
}

export default function Head({ columns }: TTableHeadProps) {
    return (
        <thead>
            <tr className="divide-x bg-gray-50">
                {columns.map((column, index) => <Column name={ column } key={ index } />)}
            </tr>
        </thead>
    )
}