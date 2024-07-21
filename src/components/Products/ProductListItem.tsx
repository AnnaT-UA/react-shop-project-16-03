import { Button, Card, CardContent } from '@mui/material'

type Props = {
    title: string
    description: string
    capacity: string
    price: string
}

const ProductListItem = ({ title } { description } { capacity } { price }: Props) => {
    return (
        <Card variant="outlined" className="product-list-item">
            <CardContent>
                <h3 className="product-title">{title}</h3>
                <p className="product-description">{description}</p>
                <div className="product-features">Type: phone</div>
                <div className="product-features">{capacity}</div>
                <div className="product-price">{price}</div>
                <div className="btns-wrapper">
                    <Button variant="outlined">Add to cart</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
