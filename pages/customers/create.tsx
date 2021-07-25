import { useRouter } from 'next/router'
import { useState } from 'react'

import Page from '../../components/page'

import { TCustomer } from '../../dtos/types'

export default function NewCustomer() {
    const router = useRouter();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const saveCustomer = () => {
        let newCustomers = []

        const oldCustomersString = localStorage.getItem('customers')

        if (oldCustomersString) {
            const oldCustomersObject = JSON.parse(oldCustomersString)
            newCustomers.push(...oldCustomersObject)
        }

        const newCustomer: TCustomer = {
            id: newCustomers.length + 1,
            firstName,
            lastName,
            email,
            addresses: [],
            createdAt: new Date().toUTCString()
        }

        newCustomers.push(newCustomer)

        const newCustomersString = JSON.stringify(newCustomers)
        localStorage.setItem('customers', newCustomersString)

        router.push('/customers')
    }

    return (
        <>
            <Page.Section title="Novo Cliente">

            </Page.Section>

            <Page.Main>
                <div className="py-8 bg-gray-100">
                    <div className="w-full max-w-xl px-4 mx-auto sm:px-6 md:px-8">
                        <h1 className="text-xl font-semibold tracking-tight">Dados Pessoais</h1>

                        <p className="mt-1 text-gray-500">
                            Informe os dados pessoais do cliente.
                        </p>

                        <form className="grid grid-cols-2 gap-6 mt-6" onSubmit={(event) => event.preventDefault()}>
                            <div className="col-span-2 space-y-2 md:col-span-1">
                                <label
                                    className="inline-block text-sm font-medium text-gray-700"
                                    htmlFor="first_name"
                                >Nome</label>

                                <input
                                    className="block w-full h-10 transition duration-75 border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-inset focus:ring-blue-600 focus:border-blue-600"
                                    id="first_name"
                                    type="text"
                                    onChange={(event) => setFirstName(event.target.value)}
                                />
                            </div>

                            <div className="col-span-2 space-y-2 md:col-span-1">
                                <label
                                    className="inline-block text-sm font-medium text-gray-700"
                                    htmlFor="last_name"
                                >Sobrenome</label>

                                <input
                                    className="block w-full h-10 transition duration-75 border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-inset focus:ring-blue-600 focus:border-blue-600"
                                    id="last_name"
                                    type="text"
                                    onChange={(event) => setLastName(event.target.value)}
                                />
                            </div>

                            <div className="col-span-2 space-y-2">
                                <label
                                    className="inline-block text-sm font-medium text-gray-700"
                                    htmlFor="email"
                                >E-mail</label>

                                <input
                                    className="block w-full h-10 transition duration-75 border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-inset focus:ring-blue-600 focus:border-blue-600"
                                    id="email"
                                    type="email"
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>

                            <footer className="col-span-2">
                                <button
                                    className="inline-flex items-center justify-center h-8 px-3 text-sm font-semibold tracking-tight text-white transition bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:bg-blue-700 focus:outline-none focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-2 focus:ring-white focus:ring-inset"
                                    type="submit"
                                    onClick={() => saveCustomer()}
                                >Salvar</button>
                            </footer>
                        </form>
                    </div>
                </div>
            </Page.Main>
        </>
    )
}