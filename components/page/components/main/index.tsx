import { ReactNode } from 'react'

type TMainProps = {
    children: ReactNode
}

export default function Main({ children }: TMainProps) {
    return (
        <main className="flex flex-1 py-8">
            <div className="w-full max-w-6xl px-4 mx-auto sm:px-6 md:px-8">
                { children }
            </div>
        </main>
    )
}