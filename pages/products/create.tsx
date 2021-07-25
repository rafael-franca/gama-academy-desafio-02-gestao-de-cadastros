import { useRouter } from 'next/router'
import { useState } from 'react'

import Page from '../../components/page'

import { TProduct } from '../../dtos/types'

export default function NewProduct() {
    const router = useRouter();

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)

    const saveProduct = () => {
        let newProducts = []

        const oldProductsString = localStorage.getItem('products')

        if (oldProductsString) {
            const oldProductsObject = JSON.parse(oldProductsString)
            newProducts.push(...oldProductsObject)
        }

        const newProduct: TProduct = {
            id: newProducts.length + 1,
            name,
            description,
            price,
            createdAt: new Date().toUTCString()
        }

        newProducts.push(newProduct)

        const newProductsString = JSON.stringify(newProducts)
        localStorage.setItem('products', newProductsString)

        router.push('/products')
    }

    return (
        <>
            <Page.Section title="Novo Produto">

            </Page.Section>

            <Page.Main>
                <div className="py-8 bg-gray-100">
                    <div className="w-full max-w-xl px-4 mx-auto sm:px-6 md:px-8">
                        <h1 className="text-xl font-semibold tracking-tight">Dados do Produto</h1>

                        <p className="mt-1 text-gray-500">
                            Informe os dados do produto.
                        </p>

                        <form className="grid grid-cols-2 gap-6 mt-6" onSubmit={(event) => event.preventDefault()}>
                            <div className="col-span-2 space-y-2">
                                <label
                                    className="inline-block text-sm font-medium text-gray-700"
                                    htmlFor="name"
                                >Nome</label>

                                <input
                                    className="block w-full h-10 transition duration-75 border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-inset focus:ring-blue-600 focus:border-blue-600"
                                    id="name"
                                    type="text"
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </div>

                            <div className="col-span-2 space-y-2">
                                <label className="inline-block text-sm font-medium text-gray-700"
                                    htmlFor="description">Descrição</label>

                                <textarea
                                    className="block w-full transition duration-75 border-gray-300 rounded-lg shadow-sm focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600"
                                    id="description"></textarea>
                            </div>

                            <div className="col-span-2 space-y-2 md:col-span-1">
                                <label
                                    className="inline-block text-sm font-medium text-gray-700"
                                    htmlFor="price"
                                >Preço</label>

                                <input
                                    className="block w-full h-10 transition duration-75 border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-inset focus:ring-blue-600 focus:border-blue-600"
                                    id="price"
                                    type="number"
                                    onChange={(event) => setPrice(Number(event.target.value))}
                                />
                            </div>

                            <footer className="col-span-2">
                                <button
                                    className="inline-flex items-center justify-center h-8 px-3 text-sm font-semibold tracking-tight text-white transition bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:bg-blue-700 focus:outline-none focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-2 focus:ring-white focus:ring-inset"
                                    type="submit"
                                    onClick={() => saveProduct()}
                                >Salvar</button>
                            </footer>
                        </form>
                    </div>
                </div>
            </Page.Main>
        </>
    )
}