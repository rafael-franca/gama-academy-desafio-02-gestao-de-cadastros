import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import Page from '../../../../components/page'

import { TAddress, TCustomer } from '../../../../dtos/types'

export default function NewCustomer() {
    const router = useRouter();

    const [customer, setCustomer] = useState<TCustomer>({} as TCustomer)
    const [address, setAddress] = useState('')
    const [number, setNumer] = useState('')
    const [complement, setComplement] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')

    useEffect(() => {
        const { id } = router.query;

        const oldCustomersString = localStorage.getItem('customers')

        if (!oldCustomersString) {
            router.push('/customers')
        } else {
            const oldCustomersObject: TCustomer[] = JSON.parse(oldCustomersString)

            const customerId = oldCustomersObject.findIndex(customer => customer.id === Number(id))
            const customer = oldCustomersObject[customerId]

            setCustomer(customer)
        }
    }, [router])

    const saveAddress = () => {
        let newAddresses: TAddress[] = []

        if (customer.addresses) {
            newAddresses.push(...customer.addresses)
        }

        const newAddress: TAddress = {
            id: newAddresses.length + 1,
            address,
            number,
            complement,
            city,
            state,
            country,
            createdAt: new Date().toUTCString()
        }

        newAddresses.push(newAddress)

        const newCustomer = {
            ...customer,
            addresses: newAddresses
        }

        const oldCustomersString = localStorage.getItem('customers')

        if (oldCustomersString) {
            const oldCustomersObject: TCustomer[] = JSON.parse(oldCustomersString)

            const customerId = oldCustomersObject.findIndex(oldCustomer => oldCustomer.id === newCustomer.id)
            oldCustomersObject[customerId] = newCustomer;

            const newCustomersString = JSON.stringify(oldCustomersObject)
            localStorage.setItem('customers', newCustomersString)
        }

        router.push('/customers')
    }

    return (
        <>
            <Page.Section title="Novo Endereço">

            </Page.Section>

            <Page.Main>
                <div className="py-8 bg-gray-100">
                    <div className="w-full max-w-xl px-4 mx-auto sm:px-6 md:px-8">
                        <h1 className="text-xl font-semibold tracking-tight">Endereço</h1>

                        <form className="grid grid-cols-3 gap-6 mt-6" onSubmit={(event) => event.preventDefault()}>
                            <div className="col-span-3 space-y-2 md:col-span-2">
                                <label
                                    className="inline-block text-sm font-medium text-gray-700"
                                    htmlFor="address"
                                >Endereço</label>

                                <input
                                    className="block w-full h-10 transition duration-75 border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-inset focus:ring-blue-600 focus:border-blue-600"
                                    id="address"
                                    type="text"
                                    onChange={(event) => setAddress(event.target.value)}
                                />
                            </div>

                            <div className="col-span-2 space-y-2 md:col-span-1">
                                <label
                                    className="inline-block text-sm font-medium text-gray-700"
                                    htmlFor="number"
                                >Número</label>

                                <input
                                    className="block w-full h-10 transition duration-75 border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-inset focus:ring-blue-600 focus:border-blue-600"
                                    id="number"
                                    type="text"
                                    onChange={(event) => setNumer(event.target.value)}
                                />
                            </div>

                            <div className="col-span-3 space-y-2">
                                <label
                                    className="inline-block text-sm font-medium text-gray-700"
                                    htmlFor="complement"
                                >Complemento</label>

                                <input
                                    className="block w-full h-10 transition duration-75 border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-inset focus:ring-blue-600 focus:border-blue-600"
                                    id="complement"
                                    type="text"
                                    onChange={(event) => setComplement(event.target.value)}
                                />
                            </div>

                            <div className="col-span-2 space-y-2 md:col-span-1">
                                <label
                                    className="inline-block text-sm font-medium text-gray-700"
                                    htmlFor="city"
                                >Cidade</label>

                                <input
                                    className="block w-full h-10 transition duration-75 border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-inset focus:ring-blue-600 focus:border-blue-600"
                                    id="city"
                                    type="text"
                                    onChange={(event) => setCity(event.target.value)}
                                />
                            </div>

                            <div className="col-span-2 space-y-2 md:col-span-1">
                                <label
                                    className="inline-block text-sm font-medium text-gray-700"
                                    htmlFor="state"
                                >Estado</label>

                                <input
                                    className="block w-full h-10 transition duration-75 border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-inset focus:ring-blue-600 focus:border-blue-600"
                                    id="state"
                                    type="text"
                                    onChange={(event) => setState(event.target.value)}
                                />
                            </div>

                            <div className="col-span-2 space-y-2 md:col-span-1">
                                <label
                                    className="inline-block text-sm font-medium text-gray-700"
                                    htmlFor="country"
                                >País</label>

                                <input
                                    className="block w-full h-10 transition duration-75 border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-inset focus:ring-blue-600 focus:border-blue-600"
                                    id="country"
                                    type="text"
                                    onChange={(event) => setCountry(event.target.value)}
                                />
                            </div>

                            <footer className="col-span-3">
                                <button
                                    className="inline-flex items-center justify-center h-8 px-3 text-sm font-semibold tracking-tight text-white transition bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:bg-blue-700 focus:outline-none focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-2 focus:ring-white focus:ring-inset"
                                    type="submit"
                                    onClick={() => saveAddress()}
                                >Salvar</button>
                            </footer>
                        </form>
                    </div>
                </div>
            </Page.Main>
        </>
    )
}