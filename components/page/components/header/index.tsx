import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Item from './components/item'

export default function Header() {
    const [menuOpen, isMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-10 w-full bg-white shadow">
            <div className="w-full max-w-6xl px-4 mx-auto sm:px-6 md:px-8">
                <nav className="flex items-center justify-between h-14">
                    <Link href="/">
                        <a
                            className="text-lg font-semibold tracking-tight"
                        >Store Admin</a>
                    </Link>

                    <ul className="items-center hidden space-x-3 text-sm font-medium text-gray-600 md:flex">
                        <li>
                            <Item name="Início" href="/" />
                        </li>

                        <li>
                            <Item name="Clientes" href="/customers" />
                        </li>

                        <li>
                            <Item name="Produtos" href="/products" />
                        </li>

                        <li>
                            <a className="block ml-3 transition rounded-full focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                                href="#">
                                <div className="relative w-8 h-8">
                                    <div className="absolute inset-0 bg-gray-200 rounded-full animate-pulse"></div>

                                    <Image className="absolute inset-0 object-cover rounded-full" src="https://thispersondoesnotexist.com/image" layout="fill" alt="" loading="lazy" objectFit="cover" />
                                </div>
                            </a>
                        </li>
                    </ul>

                    <div className="md:hidden">
                        <button
                            className="flex items-center justify-center w-10 h-10 -mr-2 text-blue-500 transition rounded-full hover:bg-gray-500/5 focus:bg-blue-500/10 focus:outline-none"
                            onClick={() => isMenuOpen(!menuOpen)}
                            type="button">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 5.75H19.25" />
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 18.25H19.25" />
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 12H19.25" />
                            </svg>
                        </button>
                    </div>
                </nav>

                <nav className={[(menuOpen ? '' : 'hidden'), '-mx-2 md:hidden'].join(' ')}>
                    <div className="border-t"></div>

                    <ul className="flex flex-col py-2 space-y-1 text-sm font-medium text-gray-600">
                        <li>
                            <Item name="Início" href="/" isMobile />
                        </li>

                        <li>
                            <Item name="Clientes" href="/customers" isMobile />
                        </li>

                        <li>
                            <Item name="Produtos" href="/products" isMobile />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}