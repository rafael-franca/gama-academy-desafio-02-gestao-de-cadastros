import { ReactNode } from 'react'
import Header from './components/header'
import Main from './components/main'
import Section from './components/section'

type TPageProps = {
    children: ReactNode
}

export default function Page({ children }: TPageProps) {
    return (
        <div className="bg-gray-100 min-h-[480px] flex flex-col">
            { children }
        </div>
    )
}

Page.Header = Header
Page.Main = Main
Page.Section = Section