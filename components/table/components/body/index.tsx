import { ReactNode } from "react"

type TTableBodyProps = {
    children: ReactNode
}

export default function Body({ children }: TTableBodyProps) {
    return (
        <tbody className="divide-y whitespace-nowrap">
            { children }
        </tbody>
    )
}