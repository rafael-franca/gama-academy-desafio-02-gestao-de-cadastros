import { ReactNode } from 'react'

import Body from './components/body'
import Item from './components/body/components/item'
import Head from './components/head'

type TTableProps = {
    headerColumns: string[] | ReactNode[]
    children: ReactNode
}

export default function Table({ headerColumns, children }: TTableProps) {
    return (
        <div className="p-8">
            <div className="-mx-8 overflow-x-auto">
                <div className="inline-block min-w-full px-4">
                    <div className="overflow-hidden bg-white border rounded-xl">
                        <table className="w-full text-left divide-y table-auto">
                            <Head columns={ headerColumns } />

                            <Body>
                                { children }
                            </Body>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

Table.Item = Item