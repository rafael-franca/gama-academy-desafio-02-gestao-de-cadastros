import Head from 'next/head'
import { useEffect, useState } from 'react'

import Button from '../../components/button'
import Page from '../../components/page'
import Table from '../../components/table'
import { TCustomer } from '../../dtos/types'

export default function Customers() {
    const [customers, seTCustomer] = useState<TCustomer[]>([])

    useEffect(() => {
        const customersString = localStorage.getItem('customers')

        if (customersString) {
            const customersObject = JSON.parse(customersString)
            seTCustomer(customersObject)
        }
    }, [])

    return (
        <>
            <Head>
                <title>Clientes - Admin - Noel Store</title>
            </Head>

            <Page.Section title="Clientes">
                <Button name="Novo Cliente" href="/customers/create" />
            </Page.Section>

            <Page.Main>
                <Table headerColumns={['Nome', 'Data de Cadastro', '']}>
                    {customers.map(customer => (
                        <Table.Item key={ customer.id }>
                            <Table.Item.Content>
                                { [customer.firstName, customer.lastName].join(' ') }
                            </Table.Item.Content>

                            <Table.Item.Content>
                                { new Date(customer.createdAt).toLocaleDateString() }
                            </Table.Item.Content>

                            <Table.Item.Content>
                                <Button.Link name="Editar" href={ ['/customers', customer.id].join('/') } />
                            </Table.Item.Content>
                        </Table.Item>
                    ))}
                </Table>
            </Page.Main>
        </>
    )
}