import Head from 'next/head'
import { useEffect, useState } from 'react'

import Button from '../../components/button'
import Page from '../../components/page'
import Table from '../../components/table'
import { TProduct } from '../../dtos/types'

export default function Products() {
  const [products, setProducts] = useState<TProduct[]>([])

  useEffect(() => {
    const productsString = localStorage.getItem('products')

    if (productsString) {
      const productsObject = JSON.parse(productsString)
      setProducts(productsObject)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Produtos - Admin - Noel Store</title>
      </Head>

      <Page.Section title="Produtos">
        <Button name="Novo Produto" href="/products/create" />
      </Page.Section>

      <Page.Main>
        <Table headerColumns={['Nome', 'Valor', '']}>
          {products.map(product => (
            <Table.Item key={product.id}>
              <Table.Item.Content>
                {product.name}
              </Table.Item.Content>

              <Table.Item.Content>
                {new Intl.NumberFormat('pt-BR', { currency: 'BRL' }).format(product.price)}
              </Table.Item.Content>

              <Table.Item.Content>
                <Button.Link name="Editar" href={['/products', product.id].join('/')} />
              </Table.Item.Content>
            </Table.Item>
          ))}
        </Table>
      </Page.Main>
    </>
  )
}