import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Button from '../../../components/button';

import Page from '../../../components/page'

import { TCustomer } from '../../../dtos/types'

export default function Customer() {
    const router = useRouter();

    const [customer, setCustomer] = useState<TCustomer>({} as TCustomer)

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

    return (
        <>
            <Page.Section title={['Cliente:', customer?.firstName, customer?.lastName].join(' ')}>
                {customer?.id && <Button name="Adicionar Endereço" href={['/customers', customer?.id, 'addresses', 'create'].join('/')} />}
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
                                    readOnly
                                    defaultValue={customer?.firstName}
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
                                    readOnly
                                    defaultValue={customer?.lastName}
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
                                    readOnly
                                    defaultValue={customer?.email}
                                />
                            </div>
                        </form>

                        {customer?.addresses?.length > 0 && (
                            <>
                                <div className="mt-6 border-t"></div>

                                <h1 className="mt-6 text-xl font-semibold tracking-tight">Endereços</h1>

                                {customer.addresses.map(address => (
                                    <div className="grid grid-cols-2 gap-6 mt-6" key={address.id}>
                                        <div className="col-span-2 space-y-2">
                                            <label
                                                className="inline-block text-sm font-medium text-gray-700"
                                                htmlFor="address"
                                            >Endereço</label>

                                            <input
                                                className="block w-full h-10 transition duration-75 border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-inset focus:ring-blue-600 focus:border-blue-600"
                                                id="address"
                                                type="text"
                                                readOnly
                                                defaultValue={address.address}
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
                                                readOnly
                                                defaultValue={address.number}
                                            />
                                        </div>

                                        <div className="col-span-2 space-y-2">
                                            <label
                                                className="inline-block text-sm font-medium text-gray-700"
                                                htmlFor="complement"
                                            >Complemento</label>

                                            <input
                                                className="block w-full h-10 transition duration-75 border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-inset focus:ring-blue-600 focus:border-blue-600"
                                                id="complement"
                                                type="text"
                                                readOnly
                                                defaultValue={address.complement}
                                            />
                                        </div>

                                        <div className="col-span-2 space-y-2 md:col-span-1">
                                            <label
                                                className="inline-block text-sm font-medium text-gray-700"
                                                htmlFor="first_name"
                                            >Cidade</label>

                                            <input
                                                className="block w-full h-10 transition duration-75 border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-inset focus:ring-blue-600 focus:border-blue-600"
                                                id="first_name"
                                                type="text"
                                                readOnly
                                                defaultValue={address.city}
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
                                                readOnly
                                                defaultValue={address.state}
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
                                                readOnly
                                                defaultValue={address.country}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </Page.Main>
        </>
    )
}