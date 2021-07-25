import { ReactNode } from 'react'

type TTableBodyItemContentProps = {
    children: ReactNode
}

export default function Content({ children }: TTableBodyItemContentProps) {
    return (
        <td className="px-4 py-3">
            {children}
        </td>
    )
}