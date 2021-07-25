import { ReactNode } from 'react'

type TSectionProps = {
    title: string
    children: ReactNode
}

export default function Section({ title, children }: TSectionProps) {
    return (
        <section className="py-8 bg-white">
            <div className="w-full max-w-6xl px-4 mx-auto sm:px-6 md:px-8">
                <div className="grid gap-2 md:gap-6 md:grid-cols-2">
                    <aside className="space-y-2">
                        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h1>
                    </aside>

                    <aside className="space-y-2 md:justify-self-end">
                        <div>
                            { children }
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}