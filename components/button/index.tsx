import Link from "next/link";

type TButtonProps = {
    href: string
    name: string
}

export default function Button({ href, name }: TButtonProps) {
    return (
        <Link href={ href }>
            <a className="inline-flex items-center justify-center px-4 font-semibold tracking-tight text-white transition bg-blue-600 rounded-lg shadow h-9 hover:bg-blue-500 focus:bg-blue-700 focus:outline-none focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-2 focus:ring-white focus:ring-inset">{ name }</a>
        </Link>
    )
}

function LinkButton({ href, name }: TButtonProps) {
    return (
        <Link href={ href }>
            <a className="text-sm font-semibold text-blue-600 hover:underline focus:underline focus:outline-none">{ name }</a>
        </Link>
    )
}

Button.Link = LinkButton