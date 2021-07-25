export type TAddress = {
    id: number
    address: string
    number: string
    complement: string
    city: string
    state: string
    country: string
    createdAt: string
}

export type TCustomer = {
    id: number
    firstName: string
    lastName: string
    email: string
    addresses: TAddress[]
    createdAt: string
}

export type TProduct = {
    id: number
    name: string
    description: string
    price: number
    createdAt: string
}