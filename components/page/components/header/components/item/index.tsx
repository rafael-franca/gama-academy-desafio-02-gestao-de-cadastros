import { useRouter } from 'next/router'
import Link from 'next/link'

type TItemProps = {
    href: string
    name: string
    isMobile?: boolean
}

export default function Item({ href, name, isMobile = false }: TItemProps) {
    const { route } = useRouter()
    
    const isCurrentRoute = route === href

    return (
        <Link href={ href }>
            <a className={ [
                (isCurrentRoute
                    ? 'text-blue-600 bg-blue-500/10 ring-2 ring-blue-500 ring-inset'
                    : 'hover:text-blue-600 focus:text-blue-600 hover:bg-blue-500/10 focus:bg-blue-500/10 focus:ring-2 focus:ring-blue-500 focus:ring-inset'
                ),
                (isMobile
                    ? 'block p-2'
                    : 'px-3 py-2'
                ),
                'transition rounded-lg focus:outline-none'
            ].join(' ') }>
                { name }
            </a>
        </Link>
    )
}