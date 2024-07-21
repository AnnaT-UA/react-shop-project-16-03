import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component={'h1'}
                sx={{
                    marginBotton: '30px',
                }}
            >
                Products List
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={4}>
                    <ProductListItem
                        title="iPhone 15"
                        description="This is Iphone 15"
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ProductListItem
                        title="iPhone 14"
                        description="This is Iphone 14"
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ProductListItem
                        title="iPhone 13"
                        description="This is Iphone 13"
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductsList
