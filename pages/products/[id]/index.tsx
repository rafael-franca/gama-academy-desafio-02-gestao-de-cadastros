import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Page from '../../../components/page'

import { TProduct } from '../../../dtos/types'

export default function Product() {
    const router = useRouter();

    const [product, setProduct] = useState<TProduct>({} as TProduct)

    useEffect(() => {
        const { id } = router.query;

        const oldProductString = localStorage.getItem('products')

        if (!oldProductString) {
            router.push('/products')
        } else {
            const oldProductObject: TProduct[] = JSON.parse(oldProductString)

            const productId = oldProductObject.findIndex(product => product.id === Number(id))
            const product = oldProductObject[productId]

            setProduct(product)
        }
    }, [, router])

    return (
        <>
            <Page.Section title={['Produto:', product.name].join(' ')}>

            </Page.Section>

            <Page.Main>
                <div className="py-8 bg-gray-100">
                    <div className="w-full max-w-xl px-4 mx-auto sm:px-6 md:px-8">
                        <h1 className="text-xl font-semibold tracking-tight">Dados do Produto</h1>

                        <p className="mt-1 text-gray-500">
                            Informe os dados do produto.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-6" onSubmit={(event) => event.preventDefault()}>
                            <div className="col-span-2 space-y-2">
                                <label
                                    className="inline-block text-sm font-medium text-gray-700"
                                    htmlFor="name"
                                >Nome</label>

                                <input
                                    className="block w-full h-10 transition duration-75 border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-inset focus:ring-blue-600 focus:border-blue-600"
                                    id="name"
                                    type="text"
                                    defaultValue={product.name}
                                />
                            </div>

                            <div className="col-span-2 space-y-2">
                                <label className="inline-block text-sm font-medium text-gray-700"
                                    htmlFor="description">Descrição</label>

                                <textarea
                                    className="block w-full transition duration-75 border-gray-300 rounded-lg shadow-sm focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600"
                                    id="description">{product.description}</textarea>
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
                                    defaultValue={product.price}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Page.Main>
        </>
    )
}