import { ReactNode } from 'react'

type TTableHeaderColumnProps = {
    name: string | ReactNode
}

export default function Column({ name }: TTableHeaderColumnProps) {
    return (
        <th className="px-4 py-2 text-sm font-semibold text-gray-600">
            { name }
        </th>
    )
}