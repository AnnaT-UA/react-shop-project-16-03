
type Product = {
    id: number
    title: string
    description: string 
    type: string
    capacity: string
    price: number
    image: string

}

export const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 15',
        description: 'This is iPhone 15',
        type: 'phone',
        capacity: '64',
        price: 1000,
        image: 'images/15.webp',
    },
    {
        id: 2,
        title: 'iPhone 14',
        description: 'This is iPhone 14',
        type: 'phone',
        capacity: '128',
        price: 800,
        image: 'images/14.webp',
    },
    {
        id: 3,
        title: 'iPhone 13',
        description: 'This is iPhone 13',
        type: 'phone',
        capacity: '256',
        price: 500,
        image: 'images/13.webp',
    },
    {
        id: 4,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: '512',
        price: 400,
        image: 'images/12.webp',
    },
    {
        id: 5,
        title: 'iPhone 11Pro',
        description: 'This is iPhone 11Pro',
        type: 'phone',
        capacity: '64',
        price: 300,
        image: 'images/11.webp',
    },
    {
        id: 6,
        title: 'iPhone 10',
        description: 'This is iPhone 10',
        type: 'phone',
        capacity: '32',
        price: 200,
        image: 'images/10.webp',
    },
]